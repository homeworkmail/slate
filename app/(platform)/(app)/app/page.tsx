import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ArrowRight, Layers2, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

async function AppPage() {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const workspaces = await db.workspace.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="h-full flex items-center justify-center p-8">
      <div className="p-6 border rounded-lg shadow-md space-y-4 w-[480px]">
        <h1 className="text-xl font-bold dark:text-zinc-300 text-zinc-700">
          Choose Workspace
        </h1>
        <div>
          {workspaces.map((ws) => (
            <Link href={`/app/${ws.id}`} key={ws.id}>
              <div className="cursor-pointer flex items-center justify-between hover:bg-zinc-100 p-2 rounded-md dark:hover:bg-zinc-700">
                <div className="flex items-center">
                  <Layers2 className="h-4 w-4 mr-2" />
                  <p className="text-sm">{ws.name}</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
        <Separator />
        <div>
          <Link href="/create-workspace">
            <div className="cursor-pointer flex items-center hover:bg-zinc-100 p-2 rounded-md dark:hover:bg-zinc-700">
              <PlusCircle className="h-4 w-4 mr-2" />
              <p className="text-sm">Create workspace</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
