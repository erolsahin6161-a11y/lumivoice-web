(() => {
  const config = {
    websiteId: "fe2ef5db-3822-4896-acdf-1154bda4da0f",
    scriptUrl: "https://cloud.umami.is/script.js",
  };

  if (!config.websiteId || !config.scriptUrl) return;

  const tracker = document.createElement("script");
  tracker.async = true;
  tracker.src = config.scriptUrl;
  tracker.dataset.websiteId = config.websiteId;
  tracker.dataset.domains = "lumivoicemedia.com,www.lumivoicemedia.com";
  tracker.dataset.doNotTrack = "true";

  document.head.appendChild(tracker);
})();
