import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ChevronsLeftRight, Layers2, PlusCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface WorkspaceSwitcherProps {
  wsId: string;
}

export const WorkspaceSwitcher = async ({ wsId }: WorkspaceSwitcherProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const workspaces = await db.workspace.findMany({
    where: {
      userId: userId,
    },
  });

  const currentWorkspace = await db.workspace.findUnique({
    where: {
      id: wsId,
    },
  });

  if (!workspaces || !currentWorkspace) {
    return redirect("/create-workspace");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 outline-none">
        <div className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-x-4 text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center">
            <Layers2 className="h-4 w-4 mr-2" />
            <p className="text-sm">{currentWorkspace.name}</p>
            <span className="text-xs ml-2 bg-zinc-100 dark:bg-zinc-800 p-[1px] px-1 rounded-md">
              Free
            </span>
          </div>
          <ChevronsLeftRight className="h-4 w-4 rotate-90" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 p-2">
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {workspaces.map((ws) => (
          <Link href={`/app/${ws.id}`} key={ws.id}>
            <DropdownMenuItem className="cursor-pointer flex items-center">
              <Layers2 className="h-4 w-4 mr-2" />
              <p>{ws.name}</p>
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <Link href={`/create-workspace`}>
          <DropdownMenuItem className="flex items-center cursor-pointer gap-x-2">
            <PlusCircle className="h-4 w-4" />
            <p>Create Workspace</p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
