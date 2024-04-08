# @unitools/image [ALPHA]

This is the official documentation of the `@unitools/image` package.

## For Next.js

### Installation

```bash
npm install @unitools/image
npm install -D @unitools/babel-plugin-image
```

or

```bash
yarn add @unitools/image
yarn add -D @unitools/babel-plugin-image
```

Add module resolver to your `next.config.js` file.

```js
// next.config.js

module.exports = {
  webpack(config) {
    config.resolve.alias["@unitools/image"] = "next/image";
    return config;
  },
};
```

## For Expo

### Installation

```bash
npm install @unitools/image expo-image
npm install -D @unitools/babel-plugin-image
```

or

```bash
yarn add @unitools/image expo-image
yarn add -D @unitools/babel-plugin-image
```

Add babel plugin to your `babel.config.js` file.

```js
// babel.config.js

module.exports = {
  plugins: [
    [
      "@unitools/babel-plugin-image",
      {
        assets: "src/assets", // Path to your assets folder where images are stored
      },
    ],
  ],
};
```

## Usage

```jsx
import Image from "@unitools/image";

export default function Home() {
  return (
    <View>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />
    </View>
  );
}
```

## Props

| Prop              | Type                     | Default | Description       | Status   | Support Status |
| ----------------- | ------------------------ | ------- | ----------------- | -------- | -------------- |
| src               | string \| NextImage Type |         | Image source      | required | ✅             |
| alt               | string                   |         | Image alt text    | required | ✅             |
| width             | number                   |         | Image width       | required | ✅             |
| height            | number                   |         | Image height      | required | ✅             |
| loader            | string                   |         | Image loader      | -        | ❌             |
| fill              | string                   |         | Image fill        | -        | ❌             |
| sizes             | string                   |         | Image sizes       | -        | ❌             |
| quality           | number (integer 1-100)   |         | Image quality     | -        | ❌             |
| priority          | boolean                  |         | Image priority    | -        | ✅             |
| placeholder       | string                   |         | Image placeholder | -        | ✅             |
| style             | object                   |         | Image style       | -        | ✅             |
| onError           | function                 |         | Error function    | -        | ✅             |
| onLoad            | function                 |         | Load function     | -        | ✅             |
| onLoadingComplete | function                 |         | Callback function | -        | ❌             |
| loading           | string                   |         | Image loading     | -        | ❌             |
| blurDataURL       | string                   |         | Image blur data   | -        | ❌             |
