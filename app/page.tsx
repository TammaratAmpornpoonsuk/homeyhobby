import { Main } from "@/components/main";
import { MainButton } from "@/components/main-button";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-background p-6 flex flex-col justify-center items-center gap-32">
      <Main />
      <MainButton />
    </div>
  );
}
