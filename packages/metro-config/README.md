# @unitools/metro-config [ALPHA]

### This is the official documentation for the @unitools/metro-config package.

## Features

- Support for .expo-web.{js|ts|jsx|tsx} file extensions.

### Installation

To install `@unitools/metro-config`, use either of the following commands:

```bash
npm install @unitools/metro-config @react-navigation/native
```

or

```bash
yarn add @unitools/metro-config @react-navigation/native
```

## Usage

Add following to your `metro.config.js` file.

```jsx
const { getDefaultConfig } = require("expo/metro-config");
const { withUnitools } = require("@unitools/metro-config");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot, {});

module.exports = withUnitools(config);
```
