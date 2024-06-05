import { Link as ExpoLink } from "expo-router";
import React from "react";
import type { LinkProps } from "@unitools/link";
import { forwardRef } from "react";

export const Link = forwardRef((props: LinkProps) => {
  return <ExpoLink {...props} />;
});

export default Link;
