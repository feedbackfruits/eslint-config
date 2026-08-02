# FeedbackFruits eslint-config
Shared eslint config for all Node.js/Typescript-based projects

Requires `eslint >= 10` and `eslint-plugin-import >= 2.30` in the consuming project;
everything else the config needs is shipped as a regular dependency.

Usage:
```sh
pnpm install -DE @feedbackfruits/eslint-config
```
Flat config:
*eslint.config.mjs*
```js
import fbfConfig from '@feedbackfruits/eslint-config';

export default [
  ...fbfConfig
];
```

Any rules or extra environments can be overriden by adding the config keys as usual:

*eslint.config.mjs*
```js
import feedbackfruits from '@feedbackfruits/eslint-config';

export default [
  ...feedbackfruits,
  {
    rules: {
      'no-console': 'off'
    }
  }
];
```
