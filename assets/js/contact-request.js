/* Public endpoint only. No provider credentials belong in browser code. */
(() => {
  async function submit(endpoint, data) {
    if (endpoint !== 'https://formspree.io/f/myeyqeld') throw new Error('Unapproved contact endpoint');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
        credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer', signal: controller.signal,
      });
      if (!response.ok) throw new Error('Contact submission failed');
      const result = await response.json();
      if (result?.ok !== true || result.errors?.length) throw new Error('Contact submission was not confirmed');
    } finally { clearTimeout(timer); }
  }
  window.siteContact = Object.freeze({ submit });
})();
