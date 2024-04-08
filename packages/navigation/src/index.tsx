import {
  NavigationRouteContext,
  useNavigation,
  useLinkTo,
  StackActions,
} from "@react-navigation/native";
import { useContext, useMemo } from "react";

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

export { usePathname, useSearchParams, useRouter };
