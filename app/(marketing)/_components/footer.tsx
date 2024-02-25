import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center">
      <div className="w-4/5 p-4 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-black/50 dark:text-white/50 text-xs"
          >
            Privacy Policy
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-black/50 dark:text-white/50 text-xs"
          >
            Terms & Conditions
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
