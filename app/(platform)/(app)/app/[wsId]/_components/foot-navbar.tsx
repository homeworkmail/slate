"use client";
import { cn } from "@/lib/utils";
import { Layers, Pencil, Scroll, Settings } from "lucide-react";
import Link from "next/link";

export const FootNavbar = (params: { wsId: string }) => {
  return (
    <div className="md:hidden border-t-[1px] border-zinc-300 fixed bottom-0 w-full">
      <div className="max-w-[1200px] mx-auto py-4 px-12 flex items-center justify-between transition-all">
        <Link href={`/app/${params.wsId}`}>
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <Scroll className="h-5 w-5" />
            <p className="text-xs">Slips</p>
          </div>
        </Link>

        <Link href={`/app/${params.wsId}/notes`}>
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <Layers className="h-5 w-5" />
            <p className="text-xs">Notes</p>
          </div>
        </Link>

        <Link href={`/editor`} target="_blank">
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <Pencil className="h-5 w-5" />
            <p className="text-xs">Editor</p>
          </div>
        </Link>

        <Link href={`/app/${params.wsId}/settings`}>
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <Settings className="h-5 w-5" />
            <p className="text-xs">Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
