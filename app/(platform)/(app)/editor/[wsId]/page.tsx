import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

async function EditorWSIDPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="border-8 border-zinc-300/50 w-36 h-36 rounded-3xl p-4">
        <div className="bg-zinc-300/50 w-4 h-4 rounded-full" />
      </div>
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            "text-zinc-300/50 font-medium text-3xl",
            poppins.className
          )}
        >
          Slate
        </h1>
        <p className="text-zinc-300/50 text-sm">Choose a note</p>
      </div>
    </div>
  );
}

export default EditorWSIDPage;
