# @unitools/utils [ALPHA]

This is the official documentation of the `@unitools/utils` package.

## Installation

```bash
npm install @unitools/utils
```

or

```bash
yarn add -D @unitools/utils
```

## Usage

```jsx
import { Platform } from "@unitools/utils";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Platform === "next" ? "lightblue" : "lightgreen",
      }}
    />
  );
}
```
