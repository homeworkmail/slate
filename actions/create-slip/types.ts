import { z } from "zod";
import { Slip } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateSlipSchema } from "./schema";

export type InputType = z.infer<typeof CreateSlipSchema>;
export type ReturnType = ActionState<InputType, Slip>;
