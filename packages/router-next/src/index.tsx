import React from "react";
import type { RouterProps } from "@unitools/router";
import { useRouter as useNextRouter } from "next/navigation";
import { usePathname as useNextPathname } from "next/navigation";

function useRouter(): RouterProps {
  const router = useNextRouter();

  const routerProps = {
    push: router.push,
    replace: router.replace,
    back: router.back,
    navigate: router.push,
  };

  return routerProps;
}

function usePathname(): string {
  return useNextPathname();
}

export { useRouter, usePathname };
