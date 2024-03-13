"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateNoteSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, title, content } = data;

  let note;

  try {
    note = await db.note.update({
      where: {
        id,
      },
      data: {
        content,
        title,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to update slip",
    };
  }

  revalidatePath(`/editor/${note.workspaceId}`);

  return { data: note };
};

export const updateNote = createSafeAction(UpdateNoteSchema, handler);
