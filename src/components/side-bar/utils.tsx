import { IconHome, IconAddressBook, IconFile } from "@tabler/icons-react";
import { NavLink } from "./types";

export const navigationLinks: NavLink[] = [
  {
    path: "overview",
    title: "OVERVIEW",
    icons: <IconHome size="2rem" />,
  },
  {
    path: "personal-information",
    title: "INFORMATION",
    icons: <IconAddressBook size="2rem" />,
  },
  {
    path: "projects",
    title: "PROJECTS",
    icons: <IconFile size="2rem" />,
  },
];
