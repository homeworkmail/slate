"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { Button } from "@/components/ui/button";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MarketingPage() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex flex-col md:w-2/3 w-full mx-auto items-center justify-center gap-12 h-full">
        <div
          className={cn(
            "flex w-full items-center justify-evenly text-md font-light",
            poppins.className
          )}
        >
          <p className="hover:text-emerald-900 hover:bg-emerald-100 dark:hover:text-emerald-100 dark:hover:bg-emerald-700 p-4 rounded-full cursor-default transition-all">
            Notebooks
          </p>
          <p className="hover:text-sky-900 hover:bg-sky-100 dark:hover:text-sky-100 dark:hover:bg-sky-700 p-4 rounded-full cursor-default transition-all">
            Journals
          </p>
          <p className="hover:text-amber-900 hover:bg-amber-100 dark:hover:text-amber-100 dark:hover:bg-amber-700 p-4 rounded-full cursor-default transition-all">
            Blogs
          </p>
          <p className="hover:text-rose-900 hover:bg-rose-100 dark:hover:text-rose-100 dark:hover:bg-rose-700 p-4 rounded-full cursor-default transition-all">
            Todo Lists
          </p>
        </div>
        <h1
          className={cn(
            "relative text-5xl md:text-8xl text-center font-regular",
            playfairDisplay.className
          )}
        >
          Writing. For Everyone.
        </h1>
        <p
          className={cn(
            "text-center md:w-2/3 text-md tracking-wide font-light",
            poppins.className
          )}
        >
          Unleash your ideas effortlessly with Slate, a dynamic notes app
          seamlessly blending journaling simplicity with powerful academic
          note-taking functionality.
        </p>
        <Button size="lg">Get started</Button>
      </main>
      <Footer />
    </div>
  );
}

export default MarketingPage;
