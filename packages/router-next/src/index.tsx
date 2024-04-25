import React from "react";
import type { RouterProps } from "@unitools/router";
import { useRouter as useNextRouter } from "next/navigation";

export default function useRouter(): RouterProps {
  const router = useNextRouter();

  const routerProps = {
    push: router.push,
    replace: router.replace,
    back: router.back,
    navigate: router.push,
  };

  return routerProps;
}
