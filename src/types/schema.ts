import { z } from "zod";
import { FieldSchema } from "./field";

const TemplateSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  fields: z.object(FieldSchema.shape).array(),
});

type Schema = z.infer<typeof TemplateSchema>;

export { TemplateSchema, type Schema };
