const path = require("path");
const imageBabel = require("../../packages/babel-plugin-universal-image/src/index");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@unitools/link": "@unitools/link-expo",
            "@unitools/router": "@unitools/router-expo",
            "@unitools/image": "@unitools/image-expo",
          },
        },
      ],
      [
        imageBabel,
        {
          assetPath: "./assets",
        },
      ],
    ],
  };
};
