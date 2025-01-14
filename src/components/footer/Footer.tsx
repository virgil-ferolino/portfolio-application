import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "../ui/label";
import reactSvg from "@/assets/react.svg";
import viteSvg from "@/assets/vite.svg";
import typescript from "@/assets/typescript.svg";

const Footer = () => {
  return (
    <div className="w-full h-20 absolute bottom-0 bg-black z-50">
      <div className="flex space-x-3 justify-end items-center h-full pr-10">
        <Label className="text-white font-semibold text-xl">Powered by:</Label>
        <Avatar>
          <AvatarImage src={reactSvg} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={viteSvg} alt="@shadcn" className="w-10 h-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src={typescript} alt="@shadcn" className="w-10 h-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Footer;
