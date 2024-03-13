import { z } from "zod";

export const CreateNoteSchema = z.object({
  title: z.optional(
    z.string({
      invalid_type_error: "Title is required",
    })
  ),

  content: z.optional(
    z.string({
      invalid_type_error: "Content is required",
    })
  ),

  slipId: z.optional(
    z.string({
      invalid_type_error: "Slip ID is required",
    })
  ),

  workspaceId: z.string({
    invalid_type_error: "Workspace ID is required",
  }),
});
