/** @type {import('next').NextConfig} */
const { withUnitools } = require("@unitools/next-adapter");
const config = withUnitools({
  transpilePackages: ["nativewind", "react-native-css-interop"],
});

module.exports = config;
