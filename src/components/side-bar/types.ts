import { ReactNode } from "react";

export interface NavLink {
  path?: string;
  title: string;
  icons?: ReactNode;
}

export interface Links {
  links: NavLink[];
  isCollapsed: boolean;
}
