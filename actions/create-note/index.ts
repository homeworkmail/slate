"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateNoteSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, content, slipId, workspaceId } = data;

  let note;

  try {
    note = await db.note.create({
      data: {
        title,
        content,
        slipId,
        workspaceId,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to create slip",
    };
  }

  revalidatePath(`/app/${note.workspaceId}/notes`);
  return { data: note };
};

export const createNote = createSafeAction(CreateNoteSchema, handler);
