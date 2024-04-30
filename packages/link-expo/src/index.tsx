import { Link as ExpoLink } from "expo-router";
import React from "react";
import type { LinkProps } from "@unitools/link";

export default function Link(props: LinkProps) {
  return <ExpoLink {...props} />;
}
