const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const standaloneSource = fs.readFileSync(path.join(__dirname, '..', 'dist', 'dragonbound-standalone.js'), 'utf8');
const originSource = standaloneSource.slice(
  standaloneSource.indexOf('const params'),
  standaloneSource.indexOf('const bridge')
);

function resolveRepoOrigin(href) {
  const url = new URL(href);
  const context = {
    location: { hostname: url.hostname, search: url.search },
    URLSearchParams
  };
  vm.createContext(context);
  vm.runInContext(`${originSource}\nthis.result = { origin: REPO_ORIGIN, target: REPO_TARGET_ORIGIN };`, context);
  return context.result;
}

test('hosted Dragonbound accepts an explicitly supplied loopback parent', () => {
  const result = resolveRepoOrigin('https://dragonbound.repocompany.uk/?repoOrigin=http%3A%2F%2F127.0.0.1%3A4173');
  assert.equal(result.origin, 'http://127.0.0.1:4173');
  assert.equal(result.target, 'http://127.0.0.1:4173');
});

test('normal hosted launches still trust production Repo Company', () => {
  const result = resolveRepoOrigin('https://dragonbound.repocompany.uk/');
  assert.equal(result.origin, 'https://repocompany.uk');
  assert.equal(result.target, 'https://repocompany.uk');
});

test('arbitrary parent origins are rejected', () => {
  const result = resolveRepoOrigin('https://dragonbound.repocompany.uk/?repoOrigin=https%3A%2F%2Fevil.example');
  assert.equal(result.origin, 'https://repocompany.uk');
  assert.equal(result.target, 'https://repocompany.uk');
});

test('hosted Dragonbound can reply to an opaque file parent', () => {
  const result = resolveRepoOrigin('https://dragonbound.repocompany.uk/?repoOrigin=null');
  assert.equal(result.origin, 'null');
  assert.equal(result.target, '*');
});

test('session messages still require exact parent, origin and nonce', () => {
  assert.match(standaloneSource, /fileRepoOrigin \? event\.origin === 'null' : event\.origin === REPO_ORIGIN/);
  assert.match(standaloneSource, /event\.source !== window\.parent \|\| !parentOriginMatches/);
  assert.match(standaloneSource, /data\.type !== 'dragonbound-app-auth' \|\| data\.bridge !== bridge/);
});
