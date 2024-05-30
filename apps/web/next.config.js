/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [
    "@unitools/image",
    "@unitools/link",
    "@unitools/link-next",
    "react-native",
    "react-native-web",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
      "@unitools/link$": "@unitools/link-next",
      "@unitools/router$": "@unitools/router-next",
      "@unitools/image$": "@unitools/image-next",
    };
    return config;
  },
};
