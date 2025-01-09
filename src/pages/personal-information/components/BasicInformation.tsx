import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactElement } from "react";

const BasicInformation = (): ReactElement => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold mb-4 text-left pl-6">
          Personal Information
        </CardTitle>
        <div className="w-[97%] self-center h-[2px] rounded-full bg-slate-200" />
        <CardContent>
          <div className="w-full grid gap-4 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-3">
            <Label className="text-start text-2xl font-bold">
              NAME: Virgil Anthony B. Ferolino
            </Label>
            <Label className="text-start text-2xl font-bold">
              EMAIL: virgil.anthony.ferolino@gmail.com
            </Label>
            <Label className="text-start text-2xl font-bold">AGE: 26</Label>
            <Label className="text-start text-2xl font-bold">
              GENDER: MALE
            </Label>
            <Label className="text-start text-2xl font-bold">
              MOBILE: 09954152680
            </Label>
            <Label className="text-start text-2xl font-bold">
              ADDRESS: 1670 Mamerta St. Ibayo-tipas, Taguig City
            </Label>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default BasicInformation;
