import { getOwnConfig, getConfig, getGlobalConfig } from '@embroider/macros';

export function fromAddon() {
  console.log('from addon', {
    getOwnConfig: getOwnConfig(),
    getConfig: {
      foo: getConfig('foo'),
      fromApp: getConfig('fromApp'),
      overrideAddon: getConfig('overrideAddon'),
    },
    getGlobalConfig: getGlobalConfig(),
  });
}
