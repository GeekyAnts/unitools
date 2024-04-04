const path = require("path");
const myBabel = require("@gluestack-ui/babel-plugin-universal-image");
// path.resolve(__dirname, "../../packages/babel-plugin-universal-image/src")
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // [
      //   "module-resolver",
      //   {
      //     alias: {
      //       "@gluestack-ui/universal-navigation": path.resolve(
      //         __dirname,
      //         "../../packages/navigation/src"
      //       ),
      //       // "@gluestack-ui/babel-plugin-universal-image": path.resolve(
      //       //   __dirname,
      //       //   "../../packages/babel-plugin-universal-image/src"
      //       // ),
      //       "@gluestack-ui/universal-image": path.resolve(
      //         __dirname,
      //         "../../packages/image/src"
      //       ),
      //     },
      //   },
      // ],
      [
        myBabel,
        {
          assetPath: "assets",
        },
      ],
    ],
  };
};
