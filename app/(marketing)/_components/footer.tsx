import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
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
          <Link href="/privacy-policy">
            <Button
              size="sm"
              variant="ghost"
              className="text-black/50 dark:text-white/50 text-xs"
            >
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms-and-conditions">
            <Button
              size="sm"
              variant="ghost"
              className="text-black/50 dark:text-white/50 text-xs"
            >
              Terms & Conditions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
