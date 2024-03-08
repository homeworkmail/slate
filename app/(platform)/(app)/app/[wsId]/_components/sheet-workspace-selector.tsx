import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ArrowRight, Layers2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SheetWorkspaceSwitcherProps {
  wsId: string;
}

export const SheetWorkspaceSwitcher = async ({
  wsId,
}: SheetWorkspaceSwitcherProps) => {
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
    <div>
      {workspaces.map((ws) => (
        <Link href={`/app/${ws.id}`} key={ws.id}>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex items-center justify-start"
          >
            <Layers2 className="h-4 w-4 mr-2" />
            <p>{ws.name}</p>
          </Button>
        </Link>
      ))}
    </div>
  );
};
