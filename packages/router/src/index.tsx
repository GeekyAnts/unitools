export interface RouterProps {
  push: (path: string) => void;
  replace: (path: string) => void;
  back: () => void;
  navigate: (path: string) => void;
}

export function useRouter(): RouterProps {
  const routerProps = {
    push: (path: string) => {},
    replace: (path: string) => {},
    back: () => {},
    navigate: (path: string) => {},
  };

  return routerProps;
}

export function usePathname(): string {
  return "";
}
