const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@unitools/link": "@unitools/link-expo",
            "@unitools/router": "@unitools/router-expo",
            "@unitools/image": "@unitools/image-expo",
            "@unitools/font-plugin": "@unitools/font-plugin-expo",
          },
        },
      ],
    ],
  };
};
