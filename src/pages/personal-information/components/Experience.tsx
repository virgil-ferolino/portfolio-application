import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-4 pl-6">
          <Label className="text-4xl font-bold text-left">Experience</Label>
        </CardTitle>
        <div className="w-[97%] self-center h-[2px] rounded-full bg-slate-200" />
        <CardContent>
          <div className="w-full mt-3 text-start">
            <Label className="text-2xl font-bold">
              Lenovo PCCW Solutions - Frontend Developer
            </Label>
          </div>
          <div className="w-full grid grid-cols-2">
            <Label className="text-start text-2xl">
              EMPF (e-Mandatory Provident Fund)
            </Label>
            <Label className="text-end text-2xl">
              March 2022 - November 2023
            </Label>
          </div>
          <div className="w-full text-start mt-4">
            <div className="w-full h-[2px] rounded-full bg-slate-200" />
            <Label draggable className="text-xl">
              The eMPF Platform is built and operated by the eMPF Platform
              Company Limited, a wholly owned subsidiary of the Mandatory
              Provident Fund Schemes Authority (MPFA), to keep pace with the
              digital era and to facilitate future reform of the MPF system. The
              eMPF Platform centralizes and digitalizes all MPF schemes’
              administrative processes, allowing users to manage MPF online at
              ease.
            </Label>
          </div>
        </CardContent>
        <CardContent>
          <div className="w-full mt-3 text-start">
            <Label className="text-2xl font-bold">
              Lenovo PCCW Solutions - Frontend Developer
            </Label>
          </div>
          <div className="w-full grid grid-cols-2">
            <Label className="text-start text-2xl">
              Bidding Management Estimator (BME)
            </Label>
            <Label className="text-end text-2xl">
              December 2023 - Febuary 2024
            </Label>
          </div>
          <div className="w-full text-start mt-4">
            <div className="w-full h-[2px] rounded-full bg-slate-200" />
            <Label draggable className="text-xl">
              The internal project website of Lenovo PCCW Solutions that handles
              the management of bidding for new projects. Used to record, manage
              and display possible project and bidding progress
            </Label>
          </div>
        </CardContent>
        <CardContent>
          <div className="w-full mt-3 text-start">
            <Label className="text-2xl font-bold">Freelance</Label>
          </div>
          <div className="w-full grid grid-cols-2">
            <Label className="text-start text-2xl">ICharge Website</Label>
            <Label className="text-end text-2xl">
              September 2024 - November 2024
            </Label>
          </div>
          <div className="w-full text-start mt-4">
            <div className="w-full h-[2px] rounded-full bg-slate-200" />
            <Label draggable className="text-xl">
              The internal project website of Lenovo PCCW Solutions that handles
              the management of bidding for new projects. Used to record, manage
              and display possible project and bidding progress
            </Label>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Experience;
