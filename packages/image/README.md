# @unitools/image [ALPHA]

This is the official documentation of the `@unitools/image` package.

## Installation

### Install all the dependencies

```bash
npm install @unitools/image
npm install -D @unitools/babel-plugin-image
```

or

```bash
yarn add @unitools/image
yarn add -D @unitools/babel-plugin-image
```

### For Next.js

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

### For Expo

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

| Prop              | Type                     | Default | Description       | Required | Supported |
| ----------------- | ------------------------ | ------- | ----------------- | -------- | --------- |
| src               | string \| NextImage Type |         | Image source      | true     | ✅        |
| alt               | string                   |         | Image alt text    | true     | ✅        |
| width             | number                   |         | Image width       | true     | ✅        |
| height            | number                   |         | Image height      | true     | ✅        |
| loader            | string                   |         | Image loader      | false    | ❌        |
| fill              | string                   |         | Image fill        | false    | ❌        |
| sizes             | string                   |         | Image sizes       | false    | ❌        |
| quality           | number (integer 1-100)   |         | Image quality     | false    | ❌        |
| priority          | boolean                  |         | Image priority    | false    | ✅        |
| placeholder       | string                   |         | Image placeholder | false    | ✅        |
| style             | object                   |         | Image style       | false    | ✅        |
| onError           | function                 |         | Error function    | false    | ✅        |
| onLoad            | function                 |         | Load function     | false    | ✅        |
| onLoadingComplete | function                 |         | Callback function | false    | ❌        |
| loading           | string                   |         | Image loading     | false    | ❌        |
| blurDataURL       | string                   |         | Image blur data   | false    | ❌        |
