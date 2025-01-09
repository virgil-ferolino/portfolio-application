import "./App.css";
import SidebarLeg from "./components/side-bar/SidebarLeg";

function App() {
  return (
    <>
      <SidebarLeg isCollapsed={false} setIsCollapse={() => {}} />
    </>
  );
}

export default App;
