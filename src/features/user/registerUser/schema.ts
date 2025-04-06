import { z } from "zod";

export const registerSchema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  body: z.string().min(1, "内容は必須です"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
