import { db } from "@/lib/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
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

  if (workspaces.length === 0) {
    redirect("/create-workspace");
  } else {
    redirect(`/app/${workspaces[0].id}`);
  }

  return <></>; 
}

export default AppPage;
