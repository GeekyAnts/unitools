# @unitools/navigation [ALPHA]

This is the official documentation of the `@unitools/navigation` package.

## Installation

### Install all the dependencies

```bash
npm install @unitools/navigation
```

or

```bash
yarn add @unitools/navigation
```

### For Next.js

Add module resolver to your `next.config.js` file.

```js
// next.config.js

module.exports = {
  webpack(config) {
    config.resolve.alias["@unitools/navigation"] = "next/link";
    return config;
  },
};
```

## Usage

```jsx
import Link from "@unitools/navigation";

export default function Home() {
  return (
    <View>
      <Link href="/about">
        <Text>About</Text>
      </Link>
    </View>
  );
}
```

## Props

| Prop              | Type                   | Default | Description       | Required | Supported |
| ----------------- | ---------------------- | ------- | ----------------- | -------- | --------- |
| alt               | string                 |         | Image alt text    | true     | ✅        |
| width             | number                 |         | Image width       | true     | ✅        |
| height            | number                 |         | Image height      | true     | ✅        |
| loader            | string                 |         | Image loader      | false    | ❌        |
| fill              | string                 |         | Image fill        | false    | ❌        |
| sizes             | string                 |         | Image sizes       | false    | ❌        |
| quality           | number (integer 1-100) |         | Image quality     | false    | ❌        |
| priority          | boolean                |         | Image priority    | false    | ✅        |
| placeholder       | string                 |         | Image placeholder | false    | ✅        |
| style             | object                 |         | Image style       | false    | ✅        |
| onError           | function               |         | Error function    | false    | ✅        |
| onLoad            | function               |         | Load function     | false    | ✅        |
| onLoadingComplete | function               |         | Callback function | false    | ❌        |
| loading           | string                 |         | Image loading     | false    | ❌        |
| blurDataURL       | string                 |         | Image blur data   | false    | ❌        |
| href              | string                 |         | Link href         | true     | ✅        |
