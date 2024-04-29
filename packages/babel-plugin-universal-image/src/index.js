const path = require("path");
module.exports = function universalImagePlugin() {
  let ImageComponentIdentifier = null;
  let assetPath = "";

  const addRequireCall = (srcAttribute, sourcePath) => {
    if (!sourcePath.startsWith("https") && !sourcePath.startsWith("file://")) {
      let srcString = "";
      srcString = path.join(assetPath, sourcePath);
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
  };

  try {
    return {
      visitor: {
        ImportDeclaration(path) {
          if (
            path.node.source.value === "@unitools/image" ||
            path.node.source.value === "@unitools/image-expo"
          ) {
            ImageComponentIdentifier = path.node.specifiers[0].local.name;
          }
        },
        JSXOpeningElement(jsxOpeningElementPath, state) {
          if (
            jsxOpeningElementPath?.node?.name?.name === ImageComponentIdentifier
          ) {
            const { assetPath: absAssetPath } = state.opts;
            assetPath = path.resolve(process.cwd(), absAssetPath);

            const srcAttribute = jsxOpeningElementPath.node.attributes.find(
              (attribute) => attribute.name.name === "source"
            );

            if (srcAttribute.value.type === "JSXExpressionContainer") {
              if (srcAttribute.value.expression.type === "StringLiteral") {
                const sourcePath = srcAttribute.value.expression.value;
                addRequireCall(srcAttribute, sourcePath);
              } else if (srcAttribute.value.expression.type === "Identifier") {
                const identifier = srcAttribute.value.expression.name;
                const scope = jsxOpeningElementPath.scope;
                const scopeVar = scope.getBinding(identifier);
                const sourcePath = scopeVar.path.node.init.value;
                addRequireCall(srcAttribute, sourcePath);
              }
            } else if (srcAttribute.value.type === "StringLiteral") {
              const sourcePath = srcAttribute.value.value;
              addRequireCall(srcAttribute, sourcePath);
            }
          }
        },
      },
    };
  } catch (error) {
    console.error("Error in @unitools/babel-plugin-universal-image", error);
  }
};
