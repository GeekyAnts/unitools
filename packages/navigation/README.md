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
    config.resolve.alias["@unitools/navigation"] = "next/navigation";
    return config;
  },
};
```

## Usage

```jsx
import { usePathname, useSearchParams, useRouter } from "@unitools/navigation";

export default function Home() {
  // usePathname
  const pathname = usePathname();

  // useSearchParams
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  // useRouter
  const router = useRouter();

  return (
    <View>
      <Text>About</Text>
    </View>
  );
}
```
