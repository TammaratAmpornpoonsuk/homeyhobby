import { Main } from "@/components/main";
import Link from "next/link";

export default function Home() {
  return (
    <Link
      key={"/product"}
      href={"/product"}
      className="text-center text-foreground hover:cursor-default"
    >
      <div className="min-h-screen min-w-screen bg-background p-6 flex flex-col justify-center items-center gap-32">
        <Main />
        Tap screen to enter website
      </div>
    </Link>
  );
}
