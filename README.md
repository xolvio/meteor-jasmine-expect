# xolvio:jasmine-expect

The NPM package xolvio-jasmine-expect packaged for Meteor.

You can access the exports via `Package['xolvio-jasmine-expect']`.

You can add `expect` to the global scope with:

```js
if (Package['xolvio-jasmine-expect']) {
  global.expect = Package['xolvio-jasmine-expect'].expect
}
```
