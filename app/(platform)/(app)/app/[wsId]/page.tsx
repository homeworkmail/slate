import React from "react";
import { Sidebar } from "./_components/sidebar";
import { db } from "@/lib/db";

async function WorkspaceIdPage({ params }: { params: { wsId: string } }) {
  const slips = await db.slip.findMany({
    where: {
      workspaceId: params.wsId,
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto space-y-4 px-4 mt-6">
      <div className="grid grid-cols-12 gap-2">
        <div className="md:col-span-2 col-span-0">
          <Sidebar />
        </div>
        <div className="md:col-span-10 col-span-12 md:ml-12 space-y-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Slips
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
