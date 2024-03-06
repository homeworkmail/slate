import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ArrowRight, Layers2 } from "lucide-react";
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
    <div className="h-full flex items-center justify-center">
      <div className="p-8 border-700 border-[1px] rounded-lg shadow-md space-y-6 md:w-1/3 w-4/5">
        <h1 className="md:text-3xl text-xl font-bold dark:text-zinc-300 text-zinc-700">
          Choose Workspace
        </h1>
        <div>
          {workspaces.map((ws) => (
            <Link href={`/app/${ws.id}`} key={ws.id}>
              <div className="cursor-pointer flex items-center justify-between hover:bg-zinc-100 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-md dark:hover:bg-zinc-700">
                <div className="flex items-center">
                  <Layers2 className="h-4 w-4 mr-2" />
                  <p>{ws.name}</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppPage;
