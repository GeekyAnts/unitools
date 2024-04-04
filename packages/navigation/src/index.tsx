import {
  Link as RNLink,
  NavigationRouteContext,
  useNavigation,
  useLinkTo,
  StackActions,
} from "@react-navigation/native";
import React, { useContext, useMemo } from "react";

function Link(props: { href: any; children: React.ReactNode }) {
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

function usePathname() {
  let route = useContext(NavigationRouteContext);
  return route?.path;
}

function useSearchParams() {
  let route = useContext(NavigationRouteContext);
  let params = route?.params;
  // @ts-ignore
  let paramsURLString = new URLSearchParams(params).toString();
  return useMemo(
    () => params && new URLSearchParams(paramsURLString),
    [paramsURLString]
  );
}

function useRouter() {
  let navigation = useNavigation();
  let navRoute = useContext(NavigationRouteContext);
  const to = useLinkTo();
  //  events, prefetch, beforePopState
  let route = {
    push: (path: string) => {
      to(path);
    },
    back: navigation.goBack,
    // @ts-ignore
    reload: () => navigation.navigate(navRoute.name),
    // events: navigation.addListener,
    prefetch: () => null,
    replace: (url: string, as?: string, _options?: any) => {
      let href = as || url;
      if (href.startsWith("/")) {
        href = href.slice(1);
      }
      // get params from url
      let params = {};
      let urlParts = href.split("?");
      if (urlParts.length > 1) {
        const searchParams = new URLSearchParams(urlParts[1]);
        searchParams.forEach((value, key) => {
          // @ts-ignore
          params[key] = value;
        });
      }
      navigation.dispatch(StackActions.replace(href, params));
    },
    beforePopState: navigation.addListener,
  };
  return route;
}

export { Link, usePathname, useSearchParams, useRouter };

export default Link;
