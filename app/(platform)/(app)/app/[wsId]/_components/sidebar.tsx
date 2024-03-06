"use client";
import { cn } from "@/lib/utils";
import { Layers, Scroll, Settings } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const sidebarOptions = [
  {
    title: "Notes",
    href: "notes",
    icon: <Layers className="h-4 w-4 mr-2" />,
  },
  {
    title: "Settings",
    href: "settings",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
];

export const Sidebar = () => {
  const params = useParams();
  const pathname = usePathname();
  const path = pathname.split("/")[3];

  return (
    <div className="w-full">
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
      {sidebarOptions.map((option) => (
        <Link href={`/app/${params.wsId}/${option.href}`} key={option.href}>
          <div
            className={cn(
              "flex items-center gap-2 p-2 mb-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-zinc-600 dark:text-zinc-400",
              path === option.href &&
                "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300"
            )}
          >
            {option.icon}
            <p className="text-sm">{option.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
