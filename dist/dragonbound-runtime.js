/* Dragonbound standalone account/runtime bridge.
   This intentionally replaces Repo Company's multi-game dashboard script. */
const db = window.repoSupabaseClient;
let character = null;
let bankState = { gp: 0 };

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, match => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[match]);
}

function toast(message, duration = 3000) {
  let node = document.getElementById('dragonboundStandaloneToast');
  if (!node) {
    node = document.createElement('div');
    node.id = 'dragonboundStandaloneToast';
    node.setAttribute('role', 'status');
    node.setAttribute('aria-live', 'polite');
    document.body.appendChild(node);
  }
  node.textContent = String(message || '');
  node.classList.add('is-visible');
  window.clearTimeout(node._hideTimer);
  node._hideTimer = window.setTimeout(() => node.classList.remove('is-visible'), duration);
}

async function loadDragonboundStandaloneCharacter() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) {
    character = null;
    bankState.gp = 0;
    document.body.classList.remove('repo-logged-in');
    document.body.classList.add('repo-logged-out');
    return null;
  }

  const { data, error } = await db.rpc('get_my_character');
  if (error) {
    console.error('Could not load the Dragonbound keeper.', error);
    character = null;
    return null;
  }

  character = data?.[0] || null;
  if (character) {
    bankState.gp = Math.max(0, Number(character.gp) || 0);
    try {
      const { data: racingData, error: racingError } = await db.rpc('get_my_dragon_racing_progression');
      if (racingError) console.warn('Could not load Dragon Racing XP.', racingError);
      else {
        const racing = Array.isArray(racingData) ? racingData[0] : racingData;
        character.dragon_racing_xp = Math.max(0, Number(racing?.xp) || 0);
      }
    } catch (racingError) {
      console.warn('Could not load Dragon Racing XP.', racingError);
    }
  }

  document.body.classList.toggle('repo-logged-in', Boolean(character));
  document.body.classList.toggle('repo-logged-out', !character);
  window.currentUser = character;
  window.dispatchEvent(new CustomEvent('repo-character-changed'));
  return character;
}

window.repoLoadDragonboundCharacter = loadDragonboundStandaloneCharacter;
window.DragonboundStandaloneRuntime = {
  character: () => character,
  refreshAccount: loadDragonboundStandaloneCharacter,
  toast
};
