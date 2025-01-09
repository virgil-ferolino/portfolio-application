import App from "@/App";
import Overview from "@/pages/overview/Overview";
import PersonalInformation from "@/pages/personal-information/PersonalInformation";
import { createBrowserRouter } from "react-router-dom";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "personal-information",
        element: <PersonalInformation />,
      },
      {
        path: "projects",
        element: <>PROJECTS</>,
      },
    ],
    errorElement: <>ERROR!</>,
  },
]);
