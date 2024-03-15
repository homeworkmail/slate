import React from "react";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-zinc-900 no-scrollbar">
      <Toaster />
      <ModalProvider />
      {children}
    </div>
  );
}

export default PlatformLayout;
