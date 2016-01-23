Package.describe({
  name: 'xolvio:jasmine-expect',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'The NPM package xolvio-jasmine-expect packaged for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: true,
});

Npm.depends({
  'xolvio-jasmine-expect': '1.0.0',
});

Package.onUse(function onUse(api) {
  api.export([
    'expect',
    'customEqualityTesters',
    'addCustomEqualityTester',
    'customMatchers',
    'addMatchers',
  ], 'server');

  api.use('ecmascript', 'server');

  api.versionsFrom('1.2.1');

  api.addFiles('main.js', 'server');
});
