"use client";
import { cn } from "@/lib/utils";
import { Layers, Pencil, Scroll, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FootNavbar = (params: { wsId: string }) => {
  const pathname = usePathname();

  return (
    <div className="md:hidden border-t-[1px] border-zinc-300 fixed bottom-0 w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between transition-all">
        <Link href={`/app/${params.wsId}`}>
          <div className="flex flex-col items-center gap-1 text-zinc-600 transition-all">
            <Scroll className="h-5 w-5" />
            <p
              className={cn(
                "text-xs",
                pathname.split("/").length === 3 && "font-bold"
              )}
            >
              Slips
            </p>
          </div>
        </Link>

        <Link href={`/app/${params.wsId}/notes`}>
          <div className="flex flex-col items-center gap-1 text-zinc-600">
            <Layers className="h-5 w-5" />
            <p
              className={cn(
                "text-xs",
                pathname.split("/")[3] === "notes" && "font-bold"
              )}
            >
              Notes
            </p>
          </div>
        </Link>

        <Link href={`/editor`} target="_blank">
          <div className="flex flex-col items-center gap-1 text-zinc-600">
            <Pencil className="h-5 w-5" />
            <p
              className={cn(
                "text-xs",
                pathname.split("/")[3] === "editor" && "font-bold"
              )}
            >
              Editor
            </p>
          </div>
        </Link>

        <Link href={`/app/${params.wsId}/settings`}>
          <div className="flex flex-col items-center gap-1 text-zinc-600">
            <Settings className="h-5 w-5" />
            <p
              className={cn(
                "text-xs",
                pathname.split("/")[3] === "settings" && "font-bold"
              )}
            >
              Settings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
