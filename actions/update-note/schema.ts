import { z } from "zod";

export const UpdateNoteSchema = z.object({
  id: z.string(),

  title: z.optional(
    z.string({
      invalid_type_error: "Title is required",
    })
  ),

  content: z.string({
    invalid_type_error: "Content is required",
  }),
});
