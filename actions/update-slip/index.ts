"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateSlipSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, title, content, type, workspaceId, reference } = data;

  let slip;

  try {
    slip = await db.slip.update({
      where: {
        id,
      },
      data: {
        content,
        type,
        workspaceId,
        reference,
        title,
        userId,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to update slip",
    };
  }

  revalidatePath(`/app/${slip.workspaceId}`);
  return { data: slip };
};

export const updateSlip = createSafeAction(UpdateSlipSchema, handler);
