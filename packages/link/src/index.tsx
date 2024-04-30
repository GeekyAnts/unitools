import { Link as RNLink } from "@react-navigation/native";
import React from "react";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  push?: boolean;
  replace?: boolean;
  asChild?: boolean;
}

export default function Link(_: LinkProps) {
  return null;
}
