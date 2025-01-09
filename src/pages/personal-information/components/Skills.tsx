import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Skills = () => {
  const skillsList: string[] = [
    "React JS",
    "Typescript",
    "Node JS",
    "Tailwind",
    "Javascript",
    "Git",
    "Jest",
    "Material UI",
    "HTML",
    "CSS",
    "Github",
    "Shadcn UI",
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">SKILLS</CardTitle>
        <CardDescription className="pb-4">
          displays the list of skills accumulated
        </CardDescription>
        <CardContent className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {skillsList.map((data, index) => {
            return (
              <Badge
                key={index}
                className="bg-slate-600 text-white text-xl flex items-center justify-center"
              >
                {data}
              </Badge>
            );
          })}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Skills;
