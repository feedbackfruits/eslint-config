# FeedbackFruits eslint-config
Shared eslint config for all Node.js/Typescript-based projects

> [!IMPORTANT]
> eslint-config now requires yarn v4+, make sure to upgrade your local yarn by following these steps: https://yarnpkg.com/getting-started/install

Usage:
```sh
yarn add -DE @feedbackfruits/eslint-config
```

*.eslintrc.json*
```json
{
  "extends": "@feedbackfruits"
}
```

Any rules or extra environments can be overriden by adding the config keys as usual
