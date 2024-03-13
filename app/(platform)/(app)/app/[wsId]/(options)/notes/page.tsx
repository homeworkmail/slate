import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";

async function NotesPage({
  params,
  searchParams,
}: {
  params: { wsId: string };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const notes = await db.note.findMany({
    where: {
      workspaceId: params.wsId,
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      tags: {
        include: {
          Tag: true,
        },
      },
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1 border-b border-zinc-300 pb-2">
        <div>
          <h1 className="text-lg font-bold text-zinc-900">Notes</h1>
          <p className="text-xs text-zinc-500">{`${notes.length} notes`}</p>
        </div>
        <Link href={`/app/${params.wsId}/new-note`} className="ml-auto">
          <Button size="icon" className="w-auto h-auto p-2" variant="ghost">
            <Plus className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <DataTable data={notes} />
    </div>
  );
}

export default NotesPage;
