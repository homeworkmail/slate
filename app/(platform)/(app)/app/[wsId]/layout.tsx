import React from "react";
import { Navbar } from "./_components/navbar";
import { Guide } from "./_components/guide";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { wsId: string };
}) {
  const workspace = await db.workspace.findUnique({
    where: {
      id: params.wsId,
    },
  });

  if (!workspace) {
    redirect("/app/create-workspace");
  }

  return {
    title: workspace.name,
  };
}

function WorkspaceIdLayout({
  children,
  params: { wsId },
}: {
  children: React.ReactNode;
  params: { wsId: string };
}) {
  return (
    <div>
      <Navbar wsId={wsId} />
      {children}
      <Guide />
    </div>
  );
}

export default WorkspaceIdLayout;
