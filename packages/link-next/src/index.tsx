import NextLink from "next/link";
import React from "react";
import type { LinkProps } from "@unitools/link";
import { forwardRef } from "react";

export const Link = forwardRef(
  ({ asChild, children, ...props }: LinkProps, ref?: any) => {
    if (asChild) {
      return (
        <NextLink
          style={{
            display: "contents",
          }}
          {...props}
          ref={ref}
          passHref
        >
          {children}
        </NextLink>
      );
    }

    return <NextLink {...props}>{children}</NextLink>;
  }
);

Link.displayName = "NextLink";
export default Link;
