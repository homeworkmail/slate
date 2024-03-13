import { z } from "zod";
import { Note } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateNoteSchema } from "./schema";

export type InputType = z.infer<typeof UpdateNoteSchema>;
export type ReturnType = ActionState<InputType, Note>;
