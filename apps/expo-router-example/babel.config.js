const path = require("path");

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
    ],
  };
};
