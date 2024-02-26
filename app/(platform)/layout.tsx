import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-zinc-900">
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
}

export default PlatformLayout;
