import { useRouter as useExpoRouter } from "expo-router";
import { usePathname as useExpoPathname } from "expo-router";
import type { RouterProps } from "@unitools/router";

function useRouter(): RouterProps {
  const router = useExpoRouter();

  const routerProps = {
    push: router.push,
    replace: router.replace,
    back: router.back,
    navigate: router.navigate,
  };

  return routerProps;
}

function usePathname(): string {
  return useExpoPathname();
}

export { useRouter, usePathname };
