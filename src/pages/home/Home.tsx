import SidebarLeg from "@/components/side-bar/SidebarLeg";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
  const [isCol, setIsCol] = useState(false);
  return (
    <div>
      <SidebarLeg
        isCollapsed={isCol}
        setIsCollapse={() => setIsCol((prev) => !prev)}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
