import { ReactElement } from "react";
import BasicInformation from "./components/BasicInformation";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Label } from "@/components/ui/label";

const PersonalInformation = (): ReactElement => {
  return (
    <div className="space-y-10 bg-slate-700 p-10 mb-20">
      <Label className="text-7xl font-bold text-white">
        PERSONAL INFORMATION
      </Label>

      <div className="space-y-10" data-aos="fade-left" data-aos-duration="1500">
        <Skills />
        <BasicInformation />
        <Experience />
      </div>
    </div>
  );
};

export default PersonalInformation;
