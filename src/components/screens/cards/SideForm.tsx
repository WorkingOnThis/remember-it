import { Button, Divider, Flex, Text } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import { Card } from "../../../types/card";
import { CardValue, CardValuesSchema } from "../../../types/card-value";
import { Field } from "../../../types/field";
import { trpc } from "../../../utils/trpc";
import { TextAreaField } from "../schemas/TextAreaField";

export interface FormValues {
  cardValues: CardValue[];
}

export const SideForm = ({
  fields,
  schemaId,
  deckId,
}: {
  fields: Field[];
  schemaId: string;
  deckId: string;
}) => {
  const form = useForm<FormValues>({
    validate: zodResolver(CardValuesSchema),
    validateInputOnChange: true,
    initialValues: {
      cardValues: [],
    },
  });
  const cardId = crypto.randomUUID();

  const { mutateAsync } = trpc.card.create.useMutation();

  useEffect(() => {
    let cardFields: any = [];
    fields.forEach((field) => {
      cardFields = [
        ...cardFields,
        {
          id: crypto.randomUUID(),
          cardId,
          fieldId: field.id,
          value: "",
        },
      ];
    });
    form.setFieldValue("cardValues", cardFields);
  }, []);

  const handleGenerateCard = async (value: FormValues) => {
    const newCard: Card = {
      id: value.cardValues[0]!.cardId,
      schemaId,
      deckId,
      state: "new",
      cardValue: value.cardValues,
    };
    await mutateAsync(newCard)
      .then(() => {
        showNotification({
          title: "Nueva tarjeta",
          message: "Se ha agregado una nueva tarjeta al mazo",
          color: "green",
        });
      })
      .catch((err) => {
        showNotification({
          title: "Error al agregar tarjeta",
          message: err.message,
          color: "red",
        });
      });
  };

  return (
    <div>
      <form onSubmit={form.onSubmit(handleGenerateCard)}>
        <Flex justify="space-between" align="center" className="my-3">
          <Text fw={700}>Frente</Text>
        </Flex>
        <Divider mb="xs" />

        {fields.map((field, index) => {
          if (field.type === "front") {
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

        <Flex justify="space-between" align="center" className="my-3">
          <Text fw={700}>Reverso</Text>
        </Flex>
        <Divider mb="xs" />

        {fields.map((field, index) => {
          if (field.type === "back") {
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
        <div className="mt-6 flex flex-row justify-between">
          <Button
            color="gray"
            variant="filled"
            compact
            onClick={() => console.log(form.values)}
            // rightIcon={<ClearAll size={18} />}
          >
            Reiniciar
          </Button>
          <Button
            color="gray"
            variant="filled"
            compact
            type="submit"
            // rightIcon={<Refresh size={18} />}
          >
            Generar
          </Button>
        </div>
      </form>
    </div>
  );
};
