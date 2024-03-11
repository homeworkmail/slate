import { z } from "zod";
import { Slip } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateSlipSchema } from "./schema";

export type InputType = z.infer<typeof UpdateSlipSchema>;
export type ReturnType = ActionState<InputType, Slip>;
