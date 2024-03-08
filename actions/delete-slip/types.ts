import { z } from "zod";
import { Slip } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { DeleteSlipSchema } from "./schema";

export type InputType = z.infer<typeof DeleteSlipSchema>;
export type ReturnType = ActionState<InputType, Slip>;
