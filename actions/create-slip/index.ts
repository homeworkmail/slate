"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateSlipSchema } from "./schema";
import { redirect } from "next/navigation";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, content, type, workspaceId, reference } = data;

  let slip;

  try {
    slip = await db.slip.create({
      data: {
        content,
        type,
        workspaceId,
        reference,
        title,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      error: "Failed to create slip",
    };
  }

  revalidatePath(`/app/${slip.workspaceId}`);
  return { data: slip };
};

export const createSlip = createSafeAction(CreateSlipSchema, handler);
