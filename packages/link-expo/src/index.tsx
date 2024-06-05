import { Link as ExpoLink } from "expo-router";
import React from "react";
import type { LinkProps } from "@unitools/link";
import { forwardRef } from "react";

// ExpoLink doesn't support have ref prop
export const Link = forwardRef((props: LinkProps, _?: any) => {
  return <ExpoLink {...props} />;
});

export default Link;
