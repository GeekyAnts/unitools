# @unitools/next-adapter [ALPHA]

### This is the official documentation for the @unitools/next-adapter package.

## Features

- Support for .unitools.{js|ts|jsx|tsx} file extensions.
- Automatic aliasing of @unitools/_ packages to @unitools/_-next and react-native to react-native-web.
- Transpilation support for react-native, @unitools/_-next, @expo, and expo-_ packages.

### Installation

To install the package, use either of the following commands:

```bash
npm install @unitools/next-adapter
```

or

```bash
yarn add @unitools/next-adapter
```

Then, add the following configuration to your next.config.js file:

```js
/** @type {import('next').NextConfig} */
const { withUnitools } = require("@unitools/next-adapter");
const config = withUnitools({});

module.exports = config;
```
