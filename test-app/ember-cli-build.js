'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['test-config-macros'],
    },
    '@embroider/macros': {
      // configure app
      setOwnConfig: {
        foo: '34',
      },

      // configure dependencies
      setConfig: {
        'test-config-macros': {
          fromApp: '12',
          overrideAddon: 'from-app',
        },
        'some-other-dependency': {
          debug: true,
          style: 'postcss',
        },
      },
    },
  });

  // return app.toTree();
  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack);
};
