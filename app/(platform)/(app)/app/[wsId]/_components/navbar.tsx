import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Suspense } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SheetWorkspaceSwitcher } from "./sheet-workspace-selector";

export const Navbar = ({ wsId }: { wsId: string }) => {
  return (
    <div className="border-b-[1px] dark:border-zinc-700 border-zinc-300">
      <div className="max-w-[1200px] mx-auto md:py-6 py-4 flex items-center justify-between px-4 transition-all">
        <div className="flex items-center gap-x-4">
          <Sheet>
            <SheetTrigger className="md:hidden block">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="space-y-4">
              <SheetHeader className="flex flex-col items-start">
                <SheetTitle>Workspaces</SheetTitle>
                <SheetDescription>Choose your workspace.</SheetDescription>
              </SheetHeader>
              <SheetWorkspaceSwitcher wsId={wsId} />
            </SheetContent>
          </Sheet>
          <Logo />
          <span className="text-4xl font-light text-zinc-300 dark:text-zinc-700 hidden md:block">
            /
          </span>
          <Suspense fallback={<WorkspaceSwitcher.Skeleton />}>
            <WorkspaceSwitcher wsId={wsId} />
          </Suspense>
        </div>
        <div className="flex items-center gap-x-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
