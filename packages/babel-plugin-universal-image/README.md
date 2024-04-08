# @unitools/babel-plugin-universal-image [ALPHA]

This is the official documentation of the `@unitools/babel-plugin-universal-image` package. This needs to be used hand-in-hand with the `@unitools/image` package.

## Installation

### Install all the dependencies

```bash
npm install @unitools/babel-plugin-universal-image
```

or

```bash
yarn add -D @unitools/babel-plugin-universal-image
```

### For Expo

Add babel plugin to your `babel.config.js` file.

```js
// babel.config.js

module.exports = {
  plugins: [
    [
      "@unitools/babel-plugin-universal-image",
      {
        assets: "src/assets", // Path to your assets folder where images are stored
      },
    ],
  ],
};
```

## What this does?

Image sourcing works differently in Next.js and Expo. This plugin helps you to use the same API for both projects. This plugin will require the image path and it will automatically resolve the path on expo projects dynamically.

So if you write the following code:

```jsx
import Image from "@unitools/image";

export default function Home() {
  return <Image src="/logo.png" alt="Logo" />;
}
```

This babel plugin will convert the above code to:

```jsx
import Image from "@unitools/image";

export default function Home() {
  return <Image src={require("/src/assets/logo.png")} alt="Logo" />;
}
```
