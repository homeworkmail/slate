import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Suspense } from "react";

export const Navbar = ({ wsId }: { wsId: string }) => {
  return (
    <div className="border-b-[1px] dark:border-zinc-700 border-zinc-300">
      <div className="max-w-[1200px] mx-auto py-6 flex items-center justify-between px-4">
        <div className="flex items-center gap-x-4">
          <Logo />
          <span className="text-4xl font-light text-zinc-300 dark:text-zinc-700">
            /
          </span>
          <Suspense fallback={<WorkspaceSwitcher.Skeleton />}>
            <WorkspaceSwitcher wsId={wsId} />
          </Suspense>
        </div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
};
