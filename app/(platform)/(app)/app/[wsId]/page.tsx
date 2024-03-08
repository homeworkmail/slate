import React from "react";
import { Sidebar } from "./_components/sidebar";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { SlipBox } from "./_components/slip-box";
import { clerkClient } from "@clerk/nextjs";

async function WorkspaceIdPage({ params }: { params: { wsId: string } }) {
  const slips = await db.slip.findMany({
    where: {
      workspaceId: params.wsId,
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto space-y-4 px-4 mt-6">
      <div className="md:grid md:grid-cols-12 md:gap-2">
        <div className="md:col-span-2 col-span-0">
          <Sidebar />
        </div>
        <div className="md:col-span-10  col-span-12 md:ml-12">
          <div className="flex items-center gap-1 border-b border-zinc-300 pb-2">
            <div>
              <h1 className="text-lg font-bold text-zinc-900">Slips</h1>
              <p className="text-xs text-zinc-500">{`${slips.length} remaining`}</p>
            </div>
            <Link href={`/app/${params.wsId}/add-slip`} className="ml-auto">
              <Button size="icon" className="w-auto h-auto p-2" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-4">
            {slips.map(async (slip) => {
              const user = await clerkClient.users.getUser(slip.userId);

              return (
                <SlipBox
                  key={slip.id}
                  slip={slip}
                  user={user.firstName as string}
                  image={user.imageUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceIdPage;
