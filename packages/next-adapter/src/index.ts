import type { NextConfig } from "next";
import findWorkspaceRoot from "find-yarn-workspace-root";
import { DefinePlugin } from "webpack";
import {
  checkIfWorkspace,
  getDependenciesFromNodeModules,
  getExactDependenciesFromNodeModules,
} from "./utils";

const unitoolsDeps = ["@unitools", "@expo", "expo-"];

const reactNativeDeps = [
  "react-native",
  "react-native-web",
  "react-native-svg",
];

export const withUnitools = (nextConfig: NextConfig) => {
  const currDir = process.cwd();
  let rootDependencyList = [];
  try {
    rootDependencyList = getDependenciesFromNodeModules(currDir, unitoolsDeps);
  } catch (e) {}

  let rootExactDependencyList = [];
  try {
    rootExactDependencyList = getExactDependenciesFromNodeModules(
      currDir,
      reactNativeDeps
    );
  } catch (e) {}

  const workspaceRoot = findWorkspaceRoot(currDir); // Absolute path or null
  const metaWorkspace = checkIfWorkspace(currDir);
  let parentDependencyList = [];
  let parentExactDependencyList = [];

  if (metaWorkspace.isWorkspace) {
    try {
      parentDependencyList = getDependenciesFromNodeModules(
        metaWorkspace.workspacePath,
        unitoolsDeps
      );
      parentExactDependencyList = getExactDependenciesFromNodeModules(
        metaWorkspace.workspacePath,
        reactNativeDeps
      );
    } catch (e) {}
  }

  if (workspaceRoot) {
    try {
      parentDependencyList = getDependenciesFromNodeModules(
        workspaceRoot,
        unitoolsDeps
      );
      parentExactDependencyList = getExactDependenciesFromNodeModules(
        workspaceRoot,
        reactNativeDeps
      );
    } catch (e) {}
  }
  let unitoolsUITranspileModules = Array.from(
    new Set([
      ...rootDependencyList,
      ...parentDependencyList,
      ...rootExactDependencyList,
      ...parentExactDependencyList,
      ...(nextConfig.transpilePackages || []),
    ])
  );

  const updatedNextConfig = {
    ...nextConfig,
    transpilePackages: unitoolsUITranspileModules,
    webpack: (config: any, ctx: any) => {
      config = nextConfig.webpack ? nextConfig.webpack(config, ctx) : config;

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "@unitools/link": "@unitools/link-next",
        "@unitools/router": "@unitools/router-next",
        "@unitools/image": "@unitools/image-next",
      };

      config.resolve.extensions = [
        ".next-web.js",
        ".next-web.jsx",
        ".next-web.ts",
        ".next-web.tsx",
        ".web.js",
        ".web.jsx",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];

      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader",
      });

      config.plugins.push(
        new DefinePlugin({
          __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
        })
      );

      return config;
    },
  };

  return updatedNextConfig;
};
