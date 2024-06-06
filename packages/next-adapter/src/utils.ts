import { readdirSync, statSync, existsSync } from "fs-extra";
import { join, resolve } from "path";

const isIncludedInDependency = (arr: any[], inputString: string) => {
  return arr.includes(inputString);
};

function traverseFolder(
  dir: any,
  prefixes: any[] = [],
  deps: Set<any> = new Set()
) {
  const files = readdirSync(dir);
  files.forEach((file: any) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      if (isIncludedInDependency(prefixes, file)) {
        deps.add(file);
      } else {
        traverseFolder(filePath, prefixes, deps);
      }
    }
  });
  return deps;
}

const getExactDependenciesFromNodeModules = (
  dir: any,
  prefixes: any[] = []
) => {
  const nodeModulesDirectory = join(dir, "node_modules");
  const dependenciesSet = traverseFolder(nodeModulesDirectory, prefixes);

  const dependencyList: any = [];
  dependenciesSet.forEach((dependency) => {
    dependencyList.push(dependency);
  });

  return dependencyList;
};

function startsWithAny(string: any, array: any) {
  for (let i = 0; i < array.length; i++) {
    if (string.startsWith(array[i])) {
      return true;
    }
  }
  return false;
}

const getDependenciesFromNodeModules = (
  dir: any,
  nodeModulePackages: any = []
) => {
  const myDependencies = new Map();

  const traverse = (directory: any) => {
    const files = readdirSync(directory);

    for (const file of files) {
      const filePath = join(directory, file);
      const stat = statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (stat.isFile() && file === "package.json") {
        const packageJson = require(filePath);

        if (
          packageJson.name &&
          startsWithAny(packageJson.name, nodeModulePackages)
        ) {
          //TODO: add dependencies if needed
          myDependencies.set(packageJson.name, {});
        }
      }
    }
  };

  nodeModulePackages.map((nodeModulePackage: any) => {
    const nodeModulesDirectory = join(dir, "node_modules", nodeModulePackage);

    if (existsSync(nodeModulesDirectory)) {
      traverse(nodeModulesDirectory);
    }
  });

  const dependencyList: any = [];

  myDependencies.forEach((packageDependencies, packageName) => {
    dependencyList.push(packageName);
    Object.entries(packageDependencies).forEach(([dependencyName]) => {
      dependencyList.push(dependencyName);
    });
  });

  return dependencyList;
};

const checkIfWorkspace = (currDir: any) => {
  return checkIfWorkspaceRecursively(currDir);
};

const checkIfWorkspaceRecursively: any = (currDir: any) => {
  const parentFiles = readdirSync(currDir);
  const metadata: any = {};

  if (parentFiles.includes("package.json")) {
    const parentPackageJson = require(resolve(currDir, "package.json"));

    const workspaces = parentPackageJson.workspaces;
    if (workspaces) {
      metadata["isWorkspace"] = true;
      metadata["workspaces"] = workspaces;
      metadata["workspacePath"] = currDir;
    }
  }

  const parentDir = resolve(currDir, "..");
  if (parentDir !== currDir) {
    const parentMetadata = checkIfWorkspaceRecursively(parentDir);
    if (parentMetadata.isWorkspace) {
      return parentMetadata;
    }
  }

  return metadata;
};

export {
  getDependenciesFromNodeModules,
  checkIfWorkspace,
  getExactDependenciesFromNodeModules,
};
