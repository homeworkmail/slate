import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-zinc-900 no-scrollbar">
      <ClerkProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </ClerkProvider>
    </div>
  );
}

export default PlatformLayout;
