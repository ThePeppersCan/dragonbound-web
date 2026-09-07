(() => {
  'use strict';

  // Keep startup failures visible while this build is separated from the much
  // larger Repo Company page. The production UI stays clean; these details are
  // only written to the browser console for release diagnostics.
  window.__dragonboundStandaloneErrors = [];
  window.addEventListener('error', event => {
    window.__dragonboundStandaloneErrors.push({
      type: 'error',
      message: event.message,
      filename: event.filename,
      line: event.lineno,
      column: event.colno
    });
    console.error(`[Dragonbound standalone startup] ${event.message} at ${event.filename}:${event.lineno}:${event.colno}\n${event.error?.stack || ''}`);
  });
  window.addEventListener('unhandledrejection', event => {
    window.__dragonboundStandaloneErrors.push({
      type: 'unhandledrejection',
      message: String(event.reason?.message || event.reason || 'Unknown promise rejection')
    });
    console.error('[Dragonbound standalone promise]', event.reason);
  });

  const SUPABASE_URL = 'https://hvdrwmjieguurxvrgzfu.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_bln84LaJ8iYmnkYK9mh0Pg_XxP7O1OZ';
  const params = new URLSearchParams(location.search);
  const localPreview = location.hostname === '127.0.0.1' || location.hostname === 'localhost';
  const requestedRepoOrigin = params.get('repoOrigin') || '';
  const REPO_ORIGIN = localPreview && /^http:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?$/.test(requestedRepoOrigin)
    ? requestedRepoOrigin
    : 'https://repocompany.uk';
  const bridge = params.get('repoBridge') || '';
  const embedded = window.parent !== window;
  let opened = false;
  let accountTimer = 0;

  const auth = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
  });
  window.repoSupabaseClient = auth;
  document.documentElement.classList.add('dragonbound-standalone');

  function gate() {
    let node = document.getElementById('dragonboundStandaloneGate');
    if (node) return node;
    node = document.createElement('div');
    node.id = 'dragonboundStandaloneGate';
    node.innerHTML = '<section><small>REPO COMPANY PRESENTS</small><h1>DRAGONBOUND</h1><p>Preparing your home, dragon and Career world…</p><div class="dragonbound-gate-spinner" aria-hidden="true"></div><a href="https://repocompany.uk/">OPEN THROUGH REPO COMPANY</a></section>';
    document.body.appendChild(node);
    return node;
  }

  function reveal() {
    const overlay = document.getElementById('dragonboundOverlay');
    if (!overlay?.openDragonbound || opened) return false;
    opened = true;
    overlay.openDragonbound();
    gate().classList.add('is-ready');
    return true;
  }

  function waitForGame() {
    if (reveal()) return;
    const observer = new MutationObserver(() => {
      if (reveal()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => {
      observer.disconnect();
      reveal();
    }, 12000);
  }

  function showAccountGate(message) {
    const node = gate();
    node.classList.add('needs-account');
    const copy = node.querySelector('p');
    if (copy) copy.textContent = message || 'Open Dragonbound through your Repo Company account to connect your cloud saves.';
  }

  async function acceptSession(data) {
    window.clearTimeout(accountTimer);
    if (!data?.accessToken || !data?.refreshToken) {
      showAccountGate(data?.error);
      return;
    }
    const { error } = await auth.auth.setSession({
      access_token: data.accessToken,
      refresh_token: data.refreshToken
    });
    if (error) {
      showAccountGate(error.message || 'Your Repo Company account could not be connected.');
      return;
    }
    waitForGame();
  }

  window.addEventListener('message', event => {
    if (!embedded || event.source !== window.parent || event.origin !== REPO_ORIGIN) return;
    const data = event.data || {};
    if (data.type !== 'dragonbound-app-auth' || data.bridge !== bridge) return;
    void acceptSession(data);
  });

  document.addEventListener('DOMContentLoaded', async () => {
    document.body.classList.add('dragonbound-standalone');
    gate();

    document.addEventListener('click', event => {
      const close = event.target.closest?.('#closeDragonboundOverlay');
      if (!close) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (embedded && bridge) {
        window.parent.postMessage({ type: 'dragonbound-app-close', bridge }, REPO_ORIGIN);
      } else {
        location.href = REPO_ORIGIN + '/';
      }
    }, true);

    if (embedded && bridge) {
      window.parent.postMessage({ type: 'dragonbound-app-ready', bridge }, REPO_ORIGIN);
      accountTimer = window.setTimeout(() => showAccountGate('Your Repo Company account connection timed out. Close Dragonbound and try again.'), 12000);
      return;
    }

    // Local previews deliberately run without a live account so the complete
    // menu, artwork and input flow can be release-tested. Production still
    // requires the signed Repo Company session bridge below.
    if (localPreview) {
      waitForGame();
      return;
    }

    const { data } = await auth.auth.getSession();
    if (data?.session) waitForGame();
    else showAccountGate();
  }, { once: true });
})();
