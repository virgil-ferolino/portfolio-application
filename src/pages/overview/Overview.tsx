import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Overview = () => {
  return (
    <div className="bg-slate-700 p-10 space-y-10 h-full">
      <Label className="font-bold text-white text-7xl">OVERVIEW</Label>
      <div
        className={cn(
          "min-h-[40rem] w-full rounded-3xl p-20",
          "bg-[url('@/assets/summaryBg.jpg')]",
          "flex flex-col justify-center space-y-10"
        )}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <Label className="text-slate-700 text-6xl font-bold">SUMMARY</Label>
        <div className="w-full h-1 bg-slate-300 rounded-full" />
        <Label className="text-slate-700 text-4xl font-semi-bold tracking-wide">
          A motivated and detail-oriented Front-End Developer with 2 years of
          hands-on experience in designing and building responsive,
          user-friendly websites and applications. Skilled in HTML, CSS,
          JavaScript, and popular libraries like React Js and React Native.
          Passionate about delivering clean, efficient code and ensuring an
          exceptional user experience. Strong problem-solving abilities and a
          quick learner, with a solid foundation in front-end development
          practices. Ready to contribute creativity, technical expertise, and a
          collaborative attitude to a dynamic development team.
        </Label>
      </div>
    </div>
  );
};

export default Overview;
