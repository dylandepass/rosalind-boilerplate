// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
alloy('configure', {
  edgeConfigId: '631c7a0c-f16f-43db-b4ea-a5601d2f64b6',
  orgId: '0F7667C2524450620A490D4C@AdobeOrg',
  debugEnabled: true,
});

alloy('sendEvent', {
  xdm: {
    web: {
      webPageDetails: {
        pageViews: {
          value: 1,
        },
      },
    },
  },
});
