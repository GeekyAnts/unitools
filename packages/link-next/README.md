# @unitools/link [ALPHA]

This is the official documentation of the `@unitools/link` package.

## For Next.js

### Installation

```bash
npm install @unitools/link
```

or

```bash
yarn add @unitools/link
```

Add module resolver to your `next.config.js` file.

```js
// next.config.js

module.exports = {
  webpack(config) {
    config.resolve.alias["@unitools/link"] = "next/link";
    return config;
  },
};
```

## For Expo

### Installation

Install `@unitools/link` and the peer dependency `@react-navigation/native`.

```bash
npm install @unitools/link @react-navigation/native
```

or

```bash
yarn add @unitools/link @react-navigation/native
```

## Usage

```jsx
import Link from "@unitools/link";

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

| Prop     | Type             | Default | Description                                        | status   | Support Status |
| -------- | ---------------- | ------- | -------------------------------------------------- | -------- | -------------- |
| href     | String or Object |         | href url                                           | required | ✅             |
| replace  | Boolean          |         | Replace the current history state                  | -        | ✅             |
| scroll   | Boolean          |         | -                                                  | -        | ❌             |
| prefetch | Boolean          |         | If true, this will prefetch the url                | -        | ❌             |
| passHref | Boolean          |         | Forces Link to send the href property to its child | -        | ❌             |
| shallow  | Boolean          |         | -                                                  | -        | ❌             |
| locale   | Boolean          |         | If true, the active locale is automatically        | -        | ❌             |
