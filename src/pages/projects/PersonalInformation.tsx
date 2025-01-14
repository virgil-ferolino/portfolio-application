import { ReactElement } from "react";
import { Label } from "@/components/ui/label";

const Projects = (): ReactElement => {
  return (
    <div className="space-y-10 bg-slate-700 p-10 mb-20">
      <Label className="text-7xl font-bold text-white">PROJECTS</Label>

      <div
        className="space-y-10"
        data-aos="fade-left"
        data-aos-duration="1500"
      ></div>
    </div>
  );
};

export default Projects;
