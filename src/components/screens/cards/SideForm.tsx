import { Button, Divider, Flex, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { CardValue } from "../../../types/card-value";
import { Field } from "../../../types/field";
import { TextAreaField } from "../schemas/TextAreaField";

interface SideSchemaProps {
  side: string;
  type: "front" | "back";
  fields: Field[];
}

export interface FormValues {
  cardValues: CardValue[];
}

export const SideForm = ({ side, type, fields }: SideSchemaProps) => {
  const form = useForm<FormValues>({
    // validate: zodResolver(NoIDDeckSchema),
    // validateInputOnChange: true,
    initialValues: {
      cardValues: [],
    },
  });

  useEffect(() => {
    fields.forEach((field) => {
      if (field.type === type) {
        form.setFieldValue("cardValues", [
          ...form.values.cardValues,
          {
            id: crypto.randomUUID(),
            cardId: crypto.randomUUID(),
            fieldId: field.id,
            value: "",
          },
        ]);
      }
    });
  }, [fields]);

  return (
    <div>
      <Flex justify="space-between" align="center" className="my-3">
        <Text fw={700}>{side}</Text>
        <Button onClick={() => console.log(form.values.cardValues[0])}>
          probar
        </Button>
      </Flex>
      <Divider mb="xs" />

      {fields.map((field, index) => {
        if (field.type === type) {
          switch (field.component) {
            case "TextAreaField":
              return (
                <TextAreaField
                  key={index}
                  label={field.name}
                  index={index}
                  form={form}
                />
              );
            default:
              return null;
          }
        }
      })}
    </div>
  );
};
