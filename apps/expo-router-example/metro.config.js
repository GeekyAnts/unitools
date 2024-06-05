const { getDefaultConfig } = require("expo/metro-config");
const findYarnWorkspaceRoot = require("find-yarn-workspace-root");
const path = require("path");

const resolveWebOnlyExtensions = require("./resolver");
// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
// if you are using Yarn Workspaces
const monorepoRoot = findYarnWorkspaceRoot(projectRoot);
// const monorepoRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// config.resolver.platforms = ["ios", "android", "web", "web-expo"];

config.resolver = {
  ...config.resolver,
  sourceExts: ["js", "jsx", "ts", "tsx", "myext"],
  resolver: resolveWebOnlyExtensions({
    platform: "web", // Specify the platform for which this resolver applies
    sourceExts: [".js", ".jsx", ".ts", ".tsx", ".myext"], // Custom source extensions
  }),
};

// config.resolver.sourceExts = ["android.tsx", ...config.resolver.sourceExts];

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
