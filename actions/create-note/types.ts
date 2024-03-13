import { z } from "zod";
import { Note } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateNoteSchema } from "./schema";

export type InputType = z.infer<typeof CreateNoteSchema>;
export type ReturnType = ActionState<InputType, Note>;
