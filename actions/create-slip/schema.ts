import { z } from "zod";

export const CreateSlipSchema = z.object({
  title: z.optional(
    z.string({
      invalid_type_error: "Title is required",
    })
  ),

  content: z
    .string({
      required_error: "Content is required",
      invalid_type_error: "Content is required",
    })
    .min(3, {
      message: "Content is too short.",
    }),

  reference: z.optional(
    z.string({
      invalid_type_error: "Reference is required",
    })
  ),

  type: z.enum(["THOUGHT", "MEDIA", "BOOK"]),

  workspaceId: z
    .string({
      required_error: "Workspace ID is required",
      invalid_type_error: "Workspace ID is required",
    })
    .min(3, {
      message: "Workspace ID is too short.",
    }),
});
