# unitools [ALPHA]

This is the official monorepo of unitools. Set of tools to solve fragmented APIs across Next and Expo projects.

## Why?

When you are working with Next and Expo projects, you will face a lot of fragmented APIs. For example, the way to handle the Images is different in both projects. This library aims to solve this problem by providing a unified API for both projects.

## What's included?

- [x] Image (A unified API for handling images with the help of a Babel Plugin)
- [x] Link (A unified API for handling links based on Next Link API)
- [x] Route Navigation Hooks (Similar to `next/navigation`)
- [ ] Utility functions (In Progress)

## Installation

```bash
npm install @unitools/image @unitools/link @unitools/navigation
npm install -D @unitools/babel-plugin-image
```

or

```bash
yarn add @unitools/image @unitools/link @unitools/navigation
yarn add -D @unitools/babel-plugin-image
```

## Documentation

- [Image](packages/image/README.md)
- [Link](packages/link/README.md)
- [Navigation](packages/navigation/README.md)
- [Babel Plugin Image](packages/babel-plugin-universal-image/README.md)
