import { main } from "@/lib/homey";
import logo from "../public/projects/logo.svg";
import Image from "next/image";

export function Main() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={logo}
        alt="Logo"
        className="max-w-xs h-auto md:max-w-lg lg:max-w-xl animate-float"
      />
      <p className="text-foreground max-w-xs text-center font-medium md:max-w-2xl">
        {main.description}
      </p>
    </div>
  );
}
