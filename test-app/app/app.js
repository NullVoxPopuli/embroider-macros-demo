import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'test-app/config/environment';

import { fromAddon } from 'test-config-macros';
import { getOwnConfig, getConfig, getGlobalConfig } from '@embroider/macros';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

fromAddon();
console.log('from app', {
  getOwnConfig: getOwnConfig(),
  getConfig: {
    foo: getConfig('foo'),
    fromApp: getConfig('fromApp'),
    overrideAddon: getConfig('overrideAddon'),
  },
  getGlobalConfig: getGlobalConfig(),
});
