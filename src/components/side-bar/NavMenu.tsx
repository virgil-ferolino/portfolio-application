import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { Links, NavLink } from "./types";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface NavTriggerProps extends Omit<Links, "links"> {
  links: NavLink;
}

const NavTrigger = (props: NavTriggerProps): ReactNode => {
  const {
    links: { path, title, icons },
    isCollapsed,
  } = props;
  const menuTriggerClass = cn(
    "w-full flex",
    "p-0 gap-5 pt-3 pb-3 pl-2",
    "place-items-center",
    "bg-black",
    "text-slate-600",
    "hover:bg-slate-900"
  );
  const menuTriggerIconsClass = cn(
    "bg-black",
    "text-slate-600",
    "hover:bg-slate-900",
    "p-2.5"
  );
  if (!isCollapsed) {
    return (
      <Link to={path ?? ""} className="text-black hover:text-black">
        <NavigationMenuTrigger className={menuTriggerClass}>
          {icons}
          {title}
        </NavigationMenuTrigger>
      </Link>
    );
  } else {
    return (
      <Link to={path as string} className="text-black hover:text-black">
        <NavigationMenuTrigger className={menuTriggerIconsClass}>
          {icons}
        </NavigationMenuTrigger>
      </Link>
    );
  }
};

const NavMenu = (props: Links) => {
  const { links, isCollapsed } = props;
  return (
    <NavigationMenu orientation="vertical" className="w-full pl-3 pr-3">
      <NavigationMenuList className="space-y-10">
        {links.map((link: NavLink, index: number) => {
          return (
            <NavigationMenuItem className="p-0" key={index}>
              <NavTrigger links={link} isCollapsed={isCollapsed} />
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
