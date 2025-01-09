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
      HELLO
      <Outlet />
    </div>
  );
};

export default App;
