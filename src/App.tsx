import SidebarLeg from "@/components/side-bar/SidebarLeg";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  const [isCol, setIsCol] = useState(false);
  return (
    <div className="flex w-[100svw]">
      <SidebarLeg
        isCollapsed={isCol}
        setIsCollapse={() => setIsCol((prev) => !prev)}
      />
      <div className="max-h-[100svh] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
