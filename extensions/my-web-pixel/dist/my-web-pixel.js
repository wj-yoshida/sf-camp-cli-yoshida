(() => {
  // node_modules/@shopify/web-pixels-extension/build/esm/globals.mjs
  var EXTENSION_POINT = "WebPixel::Render";

  // node_modules/@shopify/web-pixels-extension/build/esm/register.mjs
  var register = (extend) => shopify.extend(EXTENSION_POINT, extend);

  // extensions/my-web-pixel/src/index.js
  register(({ configuration, analytics, browser }) => {
    analytics.subscribe("page_viewed", (event) => {
      console.log("Page viewed", event);
    });
  });
})();
