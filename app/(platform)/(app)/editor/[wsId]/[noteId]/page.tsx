import { db } from "@/lib/db";
import { StickyNote } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { AddToWorkspace } from "./_components/add-to-workspace";
import { Content } from "./_components/content";

export async function generateMetadata({
  params,
}: {
  params: { wsId: string; noteId: string };
}) {
  const note = await db.note.findUnique({
    where: { id: params.noteId, workspaceId: params.wsId },
    select: { title: true },
  });

  return {
    title: note?.title,
  };
}

async function EditorNoteIdPage({
  params,
}: {
  params: { wsId: string; noteId: string };
}) {
  const note = await db.note.findUnique({
    where: { id: params.noteId, workspaceId: params.wsId },
    include: { slip: true },
  });

  if (!note) {
    redirect(`/editor/${params.wsId}`);
  }

  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StickyNote className="w-4 h-4" />
          <p className="text-xs truncate w-56">{note.title}</p>
        </div>
        <AddToWorkspace noteId={note.id} noteName={note.title} />
      </div>
      <Content note={note} />
    </div>
  );
}

export default EditorNoteIdPage;
