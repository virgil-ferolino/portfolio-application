import { IconChevronsLeft } from "@tabler/icons-react";
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import NavMenu from "./NavMenu";
import { navigationLinks } from "./utils";
import profilePicture from "../../assets/profilePicture.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { cn } from "../../lib/utils";

interface SideTypeProps extends PropsWithChildren {
  isCollapsed: boolean;
  setIsCollapse: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const SidebarLeg = (props: SideTypeProps) => {
  const { isCollapsed, setIsCollapse, className } = props;
  const isClose = `${isCollapsed ? "rotate-180" : ""}`;
  const isHovered = "hover:bg-slate-200 focus-visible:ring-1";
  const collapse = `${isCollapsed ? "w-28" : "w-72 pr-5"}`;

  return (
    <div
      className={cn(
        `relative bg-black border-r-4 border-slate-200 h-svh trasition-[width] ease-in-out duration-100 left-0 z-40 top-0`,
        className,
        collapse
      )}
      onClick={() => setIsCollapse}
    >
      <IconChevronsLeft
        stroke={2}
        className={cn(
          "aspect-square scale-150 bg-black text-slate-600 border-2 border-slate-600 rounded-full absolute right-0 translate-x-2/3 top-1/2",
          isClose,
          isHovered
        )}
        onClick={() => setIsCollapse((prev) => !prev)}
      />
      <div className="h-svh w-full space-y-5">
        <div className="text-white p-2 flex place-content-center place-items-center space-x-3 w-full">
          <Avatar className="aspect-square w-16 h-16">
            <AvatarImage src={profilePicture} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <Label className="text-2xl font-bold">PORTFOLIO</Label>
          )}
        </div>
        <NavMenu links={navigationLinks} isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default SidebarLeg;
