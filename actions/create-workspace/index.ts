"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateWorkspaceSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let workspace;

  try {
    workspace = await db.workspace.create({
      data: {
        name: title,
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to create workspace",
    };
  }

  revalidatePath(`/app/${workspace.id}`);
  return { data: workspace };
};

export const createWorkspace = createSafeAction(CreateWorkspaceSchema, handler);
