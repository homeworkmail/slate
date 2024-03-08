import { z } from "zod";

export const DeleteSlipSchema = z.object({
  id: z.string(),
});
