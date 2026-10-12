# Security and privacy — The Prisoners

The site remains a static GitHub Pages website. Each deployed HTML document includes an early meta CSP and a referrer policy. Google ownership verification remains unchanged.

## Updating HTML

After changing executable inline scripts, regenerate and verify the policy before publication:

```sh
node scripts/security-policy.mjs
node scripts/security-policy.mjs --check
node --test scripts/security.test.mjs
```

The policy permits local scripts and the reviewed Cloudflare beacon, hashed existing inline scripts, Google Fonts, the configured form endpoint and only the reviewed frame origins where needed. Inline event handlers, arbitrary remote scripts, plugins, workers and base URL changes are blocked. Existing inline styles remain supported to preserve the design. GitHub Pages cannot apply custom HTTP security headers through a repository `_headers` file; meta CSP does not support `frame-ancestors`, HSTS or Permissions-Policy. These require a supporting hosting/edge configuration.

## Analytics

`security.config.json` records the public beacon identifier and HTTPS production hosts. `assets/js/web-analytics.js` loads only on those hosts and prevents duplicate beacons. Local/preview hosts do not report statistics. This token is not an account credential. Visitor information is linked from the footer in both languages. Google Fonts remains an external connection; do not describe every site request as cookie-free.

## Browser validation

The GitHub workflow tests all HTML pages at 320, 390, 768 and 1280 pixels under their actual meta CSP. PRs compare the existing typography, section dimensions and overflow with the base branch. Provider players and Formspree requests are intercepted; no real message or private data is submitted. Screenshots and a summary are attached to the workflow run.

## Contact delivery

The approved Formspree endpoint remains unchanged. Native HTML required/email validation and length limits apply. A local `_gotcha` honeypot and an in-flight lock prevent obvious spam and duplicate submissions; provider-side spam/rate limiting remains Formspree's responsibility. The request has a 20-second abort deadline, omits credentials/referrer, rejects redirects and accepts success only from an HTTP-success JSON response with `ok: true` and no errors. Fields are reset only after confirmation; failed or ambiguous responses preserve text. Controls and status recover after every outcome.

The existing Gallery YouTube player remains allowed by the site-specific CSP; this change does not add click-to-load media to The Prisoners.
