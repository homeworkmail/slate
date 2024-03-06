import React from "react";
import { Sidebar } from "./_components/sidebar";
import { PlusCircle } from "lucide-react";
import { db } from "@/lib/db";
import Link from "next/link";

async function WorkspaceIdPage({ params }: { params: { wsId: string } }) {
  const slips = await db.slip.findMany({
    where: {
      workspaceId: params.wsId,
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto space-y-4 px-4 mt-6">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ml-12 space-y-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Today's slips
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <Link href={`/app/${params.wsId}/create-slip`}>
              <div className="dark:bg-zinc-800 bg-zinc-100 h-32 gap-2 rounded-md border dark:border-zinc-700 border-zinc-300 p-2 text-sm flex items-center justify-center text-zinc-500 font-medium cursor-pointer dark:hover:border-zinc-500 hover:border-zinc-300 dark:hover:text-zinc-300 hover:text-zinc-900 transition-all">
                <PlusCircle className="h-4 w-4" />
                <p>Add slip</p>
              </div>
            </Link>
            {slips?.map((slip) => (
              <div className="dark:bg-zinc-800 bg-zinc-100 h-32 gap-2 rounded-md border dark:border-zinc-700 border-zinc-300 p-2 text-sm flex items-center justify-center text-zinc-500 font-medium cursor-pointer dark:hover:border-zinc-500 hover:border-zinc-300 dark:hover:text-zinc-300 hover:text-zinc-900 transition-all">
                <p className="text-xs text-center p-8 truncate">{slip.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
