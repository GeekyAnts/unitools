import path from "path";
import fs from "fs";
import { resolve } from "metro-resolver";

export const resolver = (context: any, moduleName: any, platform: any) => {
  try {
    if (platform === "web") {
      const resolution = resolve(
        {
          ...context,
          originModulePath: context.originModulePath,
        },
        moduleName,
        platform
      );

      if (resolution?.type === "sourceFile") {
        const filepath = resolution?.filePath;

        if (filepath) {
          const directory = path.dirname(filepath);
          const filename = path.basename(filepath, path.extname(filepath));
          const fileExt = `.expo-web${path.extname(filepath)}`;
          const platformResolveFilePath = path.join(
            directory,
            `${filename}${fileExt}`
          );

          if (fs.existsSync(platformResolveFilePath)) {
            return context.resolveRequest(
              context,
              platformResolveFilePath,
              platform
            );
          }
        }
      }

      return context.resolveRequest(context, moduleName, platform);
    }

    return context.resolveRequest(context, moduleName, platform);
  } catch (err) {
    return context.resolveRequest(context, moduleName, platform);
  }
};
