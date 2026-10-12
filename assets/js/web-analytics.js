/* Public site identifier; skip local and preview hosts and duplicate beacons. */
(() => {
  if (location.protocol !== 'https:' || !["uptheprisoners.gr", "www.uptheprisoners.gr"].includes(location.hostname)) return;
  if (document.querySelector('script[data-cf-beacon]')) return;
  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token: "ccc78731c4ad4bd48b0e7e1b17bc64fd" }));
  document.body.append(beacon);
})();
