import React from "react";
import { Navbar } from "./_components/navbar";
import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { FootNavbar } from "./_components/foot-navbar";
import { auth } from "@clerk/nextjs";

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

async function WorkspaceIdLayout({
  children,
  params: { wsId },
}: {
  children: React.ReactNode;
  params: { wsId: string };
}) {
  const workspace = await db.workspace.findUnique({
    where: {
      id: wsId,
    },
  });

  const { userId } = auth();

  if (workspace?.userId !== userId) {
    return notFound();
  }

  if (!workspace) {
    redirect("/app/create-workspace");
  }

  return (
    <div className="h-full">
      <Navbar wsId={wsId} />
      <div className="md:py-24 py-14 mt-6">{children}</div>
      <FootNavbar wsId={wsId} />
    </div>
  );
}

export default WorkspaceIdLayout;
