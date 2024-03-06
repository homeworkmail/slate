import { z } from "zod";

export const CreateSlipSchema = z.object({
  title: z.optional(
    z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title is required",
      })
      .min(3, {
        message: "Title is too short.",
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
    z
      .string({
        required_error: "Reference is required",
        invalid_type_error: "Reference is required",
      })
      .min(3, {
        message: "Reference is too short.",
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
