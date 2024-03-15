import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { auth } from "@clerk/nextjs";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MarketingPage() {
  const { userId } = auth();

  const hasUser = !!userId;

  return (
    <div className="h-full flex flex-col">
      <Header hasUser={hasUser} />
      <main className="flex flex-col items-center justify-center gap-12 h-full">
        <h1
          className={cn(
            "text-4xl sm:text-6xl md:text-7xl text-center",
            playfairDisplay.className
          )}
        >
          Writing. For Everyone.
        </h1>
        <p
          className={cn(
            "text-sm sm:text-md md:text-lg w-4/6 md:w-1/2 text-center font-light",
            poppins.className
          )}
        >
          Unleash your ideas effortlessly with Slate, a dynamic notes app
          seamlessly blending journaling simplicity with powerful academic
          note-taking functionality.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default MarketingPage;
