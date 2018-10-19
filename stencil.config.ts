import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ip-stencil-route-listener',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
