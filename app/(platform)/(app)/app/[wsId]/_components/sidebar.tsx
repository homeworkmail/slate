"use client";
import { cn } from "@/lib/utils";
import { Layers, Pencil, Scroll, Settings } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const Sidebar = () => {
  const params = useParams();
  const pathname = usePathname();

  return (
    <div className="w-full hidden md:block">
      <Link href={`/app/${params.wsId}`}>
        <div
          className={cn(
            "flex items-center gap-2 mb-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-600 dark:text-zinc-400",
            pathname.split("/").length === 3 &&
              "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300"
          )}
        >
          <Scroll className="h-4 w-4 mr-2" />
          <p className="text-sm">Slips</p>
        </div>
      </Link>

      <Link href={`/app/${params.wsId}/notes`}>
        <div
          className={cn(
            "flex items-center gap-2 mb-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-600 dark:text-zinc-400",
            pathname.split("/")[3] === "notes" &&
              "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300"
          )}
        >
          <Layers className="h-4 w-4 mr-2" />
          <p className="text-sm">Notes</p>
        </div>
      </Link>

      <Link href={`/editor`} target="_blank">
        <div
          className={cn(
            "flex items-center gap-2 mb-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-600 dark:text-zinc-400",
            pathname.split("/")[3] === "editor" &&
              "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300"
          )}
        >
          <Pencil className="h-4 w-4 mr-2" />
          <p className="text-sm">Editor</p>
        </div>
      </Link>

      <Link href={`/app/${params.wsId}/settings`}>
        <div
          className={cn(
            "flex items-center gap-2 mb-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-600 dark:text-zinc-400",
            pathname.split("/")[3] === "settings" &&
              "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300"
          )}
        >
          <Settings className="h-4 w-4 mr-2" />
          <p className="text-sm">Settings</p>
        </div>
      </Link>
    </div>
  );
};
