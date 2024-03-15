import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <div className="border-[1px] border-black dark:border-white w-8 h-8 rounded-md p-[6px]">
          <div className="bg-black dark:bg-white w-[6px] h-[6px] rounded-full" />
        </div>
        <h1 className={cn("text-xl font-semibold")}>Slate</h1>
      </div>
    </Link>
  );
};
