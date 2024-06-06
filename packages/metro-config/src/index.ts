import { resolver } from "./resolver";
import type { MetroConfig } from "metro-config";

export const withUnitools = (config: MetroConfig): MetroConfig => {
  return {
    ...config,
    resolver: {
      ...config?.resolver,
      resolveRequest: resolver,
    },
  };
};
