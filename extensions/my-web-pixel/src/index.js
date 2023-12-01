import {register} from "@shopify/web-pixels-extension";

register(({ configuration, analytics, browser }) => {
    // Bootstrap and insert pixel script tag here

    // Sample subscribe to page view
    analytics.subscribe('page_viewed', (event) => {
      console.log('Page viewed', event);
    });
    /*
    analytics.subscribe('all_events', (event) => {
      console.log(`Web Pixel event received: ${JSON.stringify(event, null, 4)}`);
    }); */
});
