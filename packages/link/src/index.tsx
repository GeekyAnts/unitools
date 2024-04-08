import { Link as RNLink } from "@react-navigation/native";
import React from "react";

export default function Link(props: { href: any; children: React.ReactNode }) {
  let { href, children } = props;
  let hrefPaths;
  if (typeof href === "object" && href.pathname) {
    hrefPaths = href.pathname.split("/");
  } else {
    hrefPaths = href.split("/");
  }
  delete href.pahname;
  return (
    // @ts-ignore
    <RNLink
      to={{
        screen: hrefPaths.length > 1 ? hrefPaths[1] : hrefPaths[0],
        ...(typeof href === "object" ? href : {}),
      }}
    >
      {children}
    </RNLink>
  );
}

//  useRouter
