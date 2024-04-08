const path = require("path");
module.exports = function universalImagePlugin() {
  let ImageComponentIdentifier = null;
  const imageImportPath = path.resolve(__dirname, "../../packages/image/src");
  return {
    visitor: {
      // Find all import statements for @unitools/link and replace them with next/link
      ImportDeclaration(path) {
        // console.log(path.node.source.value);
        if (
          path.node.source.value === "@unitools/image"
          // ||
          // path.node.source.value === imageImportPath
        ) {
          ImageComponentIdentifier = path.node.specifiers[0].local.name;
        }
      },
      JSXOpeningElement(path, state) {
        if (path.node.name.name === ImageComponentIdentifier) {
          // Find the src attribute
          const { assetPath } = state.opts;
          const srcAttribute = path.node.attributes.find(
            (attribute) => attribute.name.name === "src"
          );
          // Check if the src attribute is not a require function call
          if (srcAttribute.value.type !== "JSXExpressionContainer") {
          }

          // If the src attribute is a string literal, replace it with a require function call
          if (srcAttribute.value.expression.type === "StringLiteral") {
            // get the assetPath option from the babel state
            let srcString = "";
            if (assetPath) {
              srcString = `./${assetPath}/${srcAttribute.value.expression.value}`;
            } else {
              srcString = "./" + srcAttribute.value.expression.value;
            }
            // if (ImageComponentIdentifier) {
            //   console.log("srcString", srcString);
            // }
            // require the srcString and replace the src attribute
            srcAttribute.value = {
              type: "JSXExpressionContainer",
              expression: {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "require",
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: srcString,
                  },
                ],
              },
            };
          }
        }
      },
    },
  };
};
