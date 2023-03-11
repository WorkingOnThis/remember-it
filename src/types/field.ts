import { z } from "zod";

const FieldSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  description: z.string().nullable(),
  type: z.string(),
  component: z.string(),
  defaultValue: z.string().nullable(),
  validation: z.string().nullable(),
  values: z.string().nullable(),
});
const NoIDFieldSchema = FieldSchema.omit({ id: true });

type Field = z.infer<typeof FieldSchema>;

type NoIDField = z.infer<typeof NoIDFieldSchema>;

export { FieldSchema, NoIDFieldSchema, type Field, type NoIDField };
