# Introduction to Unitools

Unitools is a group of tooling that aims to simplify the process of code sharing between `Next.js`, `Expo`, and `React Native` projects. It's a required and indispensable tool in the realm of cross-platform development today with more and more apps moving towards universal app development. Unitools provides a unified API for handling `images`, `links`, and `route navigation hooks` across all these platforms.

## Why?

The challenge of sharing code for navigation and images across platforms like Next.js and Expo has always been a significant hurdle for developers because of the fragmented APIs. These platforms, although powerful in their own right, have distinct structures and syntax, which creates an added layer of complexity when writing code. Unitools is designed to address this specific problem. By enabling seamless code sharing between these platforms, Unitools eliminates the need for developers to write separate sets of code, thus saving time and effort and allowing for a smoother workflow.

## How it is different?

There are other tools in the market that attempt to solve the same problem, such as Solito. These tools, while offering much more features also adds a layer of complexities and learning curve.

Unitools is designed to be simple and easy to use. It provides a unified API but only for your DX and rely on the bundler to use the actual platform specific code. This makes it easier to understand and use.

## What’s included?

Each package contains three libraries.

1. Base package which exports the interface
2. Expo package
3. Next.js package

Below are the packages we have created so far:

- Link - A unified API for expo and next link
- Image -A unified API for expo and next image
- Router - A unified API for expo and next router
