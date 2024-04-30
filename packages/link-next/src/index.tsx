import NextLink from "next/link";
import React from "react";
import type { LinkProps } from "@unitools/link";
import router from "next/router";

export default function Link({ asChild, children, ...props }: LinkProps) {
  if (asChild) {
    return (
      <NextLink
        style={{
          display: "contents",
        }}
        {...props}
        passHref
      >
        {children}
      </NextLink>
    );
  }

  return <NextLink {...props}>{children}</NextLink>;
}
