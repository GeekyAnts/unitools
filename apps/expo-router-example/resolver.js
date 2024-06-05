// CustomResolverPlugin.js
const { Resolver } = require("metro-resolver");

function resolveWebOnlyExtensions(options) {
  return async (resolveObject) => {
    const { platform, sourceExts } = options;

    if (platform !== "web") {
      // If platform is not web, let Metro's default resolver handle it
      return Resolver.resolve(resolveObject, options);
    }

    const { file, platform: filePlatform } = resolveObject;

    // Check if the file has a custom extension and the platform is web
    if (filePlatform === "web" && file.endsWith(".myext")) {
      // Resolve the file path with the custom extension for the web platform
      const resolvedFilePath = file.replace(/\.myext$/, ".js");
      return { file: resolvedFilePath };
    }

    // For other cases, let Metro's default resolver handle it
    return Resolver.resolve(resolveObject, options);
  };
}

module.exports = resolveWebOnlyExtensions;
