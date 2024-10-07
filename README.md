# FeedbackFruits eslint-config
Shared eslint config for all Node.js/Typescript-based projects

> [!IMPORTANT]
> eslint-config now requires yarn v4+, make sure to upgrade your local yarn by following these steps: https://yarnpkg.com/getting-started/install

Usage:
```sh
yarn add -DE @feedbackfruits/eslint-config
```
Flat config:
*eslint.config.mjs*
```js
import fbfConfig from '@feedbackfruits/eslint-config';

export default [
  ...fbfConfig
];
```

Legacy config:
*.eslintrc.json*
```json
{
  "extends": "@feedbackfruits"
}
```

Any rules or extra environments can be overriden by adding the config keys as usual:

Flat config:
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

Legacy config:
*.eslintrc.json*
```json
{
  "extends": "@feedbackfruits",
  "rules": {
    "no-console": "off"
  }
}
```
