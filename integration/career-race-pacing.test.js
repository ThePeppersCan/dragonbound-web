const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const raceSource = fs.readFileSync(path.join(__dirname, '..', 'dist', 'dragon-racing-race.js'), 'utf8');
const careerSource = fs.readFileSync(path.join(__dirname, '..', 'dist', 'dragonbound-career-mode', 'career.js'), 'utf8');
const pacingSource = raceSource.slice(
  raceSource.indexOf('function seasonManualCallIsOpen()'),
  raceSource.indexOf('function activeSectors()')
);

function pacingHarness({ mode = 'quick', distance = 0, callIndex = 0, callVisible = -1, greenwater = false } = {}) {
  const context = {
    state: {
      player: { distance },
      storyRace: { presentationMode: mode, seasonCallIndex: callIndex, seasonCallVisible: callVisible }
    },
    isSeasonStoryRace: () => true,
    isGreenwaterSeasonRace: () => greenwater,
    activeLaps: () => 3,
    seasonPresentationMode: () => mode,
    seasonRaceCallDefinition: index => ({ trigger: greenwater ? 1.74 : index === 0 ? 0.58 : 2.22 }),
    clamp: (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0)),
    lerp: (from, to, amount) => from + (to - from) * amount,
    normKey: value => String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    Number,
    Math
  };
  vm.createContext(context);
  vm.runInContext(`${pacingSource}\nthis.rate = seasonSimulationRate();`, context);
  return context.rate;
}

test('Quick Sim begins accelerated without the old 7x sprint', () => {
  const rate = pacingHarness();
  assert.ok(rate >= 2 && rate <= 3, `expected readable 2-3x opening pace, received ${rate}`);
  assert.notEqual(rate, 7);
});

test('Quick Sim eases toward live speed before the decisive call', () => {
  const early = pacingHarness({ distance: 0.8, callIndex: 1 });
  const approach = pacingHarness({ distance: 2.16, callIndex: 1 });
  assert.ok(approach < early, `expected ${approach} to be slower than ${early}`);
  assert.ok(approach >= 1 && approach <= 1.65);
});

test('Velmora does not brake for its invisible automatic first call', () => {
  const beforeAutoCall = pacingHarness({ distance: 0.55, callIndex: 0 });
  assert.ok(beforeAutoCall > 2, `expected routine pace before auto-call, received ${beforeAutoCall}`);
});

test('manual calls pause both Watch Live and Quick Sim', () => {
  assert.equal(pacingHarness({ mode: 'quick', distance: 2.23, callIndex: 1, callVisible: 1 }), 0);
  assert.equal(pacingHarness({ mode: 'watch', distance: 2.23, callIndex: 1, callVisible: 1 }), 0);
});

test('Quick Sim keeps the final run readable after the choice', () => {
  const finalRate = pacingHarness({ distance: 2.7, callIndex: 2, callVisible: 1 });
  assert.ok(finalRate >= 1 && finalRate <= 1.32, `expected near-live final lap, received ${finalRate}`);
});

test('Full Sim remains fast and auto-resolved', () => {
  assert.equal(pacingHarness({ mode: 'full', distance: 1.2 }), 12);
});

test('career result handling remains duplicate-safe and saves before launching', () => {
  assert.match(careerSource, /if\(current\.status==='complete'\)return;/);
  assert.match(careerSource, /await persistStory\(changed,\{stageOverride:'quickquill-season-round-1'\}\);[\s\S]*?sendParent\('dragonbound-career-story-race-start'/);
  assert.match(careerSource, /await persistStory\(changed,\{stageOverride:'quickquill-season-round-2'\}\);[\s\S]*?sendParent\('dragonbound-career-story-race-start'/);
  assert.match(careerSource, /round\.status='ready';round\.runId='';/);
});
