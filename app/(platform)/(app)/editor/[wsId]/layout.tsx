import React from "react";
import { Sidebar } from "./_components/sidebar";
import { auth } from "@clerk/nextjs";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

export async function generateMetadata() {
  return {
    title: "Editor",
  };
}

async function EditorWsIdNoteIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { wsId: string; noteId: string };
}) {
  const workspace = await db.workspace.findUnique({
    where: {
      id: params.wsId,
    },
  });

  const { userId } = auth();

  if (workspace?.userId !== userId) {
    return notFound();
  }

  return (
    <div className="flex h-full w-full">
      <div className="min-w-[240px] w-1/4">
        <Sidebar params={params} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default EditorWsIdNoteIdLayout;
