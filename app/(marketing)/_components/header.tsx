import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Header() {
  return (
    <div className="fixed top-0 w-full border-b-[1px] border-zinc-300 dark:border-zinc-700 flex items-center justify-center">
      <div className="w-4/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="border-[1px] border-black dark:border-white w-8 h-8 rounded-md p-[6px]">
            <div className="bg-black dark:bg-white w-[6px] h-[6px] rounded-full" />
          </div>
          <h1 className={cn("text-xl font-medium", poppins.className)}>
            Slate
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button size="sm" variant="ghost">
            Login
          </Button>
          <Button size="sm" variant="default">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
