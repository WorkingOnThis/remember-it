import { Button, Flex, Input } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useState, useEffect } from "react";
import { Field } from "../../../types/field";
import { Schema, TemplateSchema } from "../../../types/schema";
import { trpc } from "../../../utils/trpc";
import { SideSchema } from "./SideSchema";

export const NewSchema = () => {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    const initialFields = [
      {
        id: crypto.randomUUID(),
        name: "Pregunta",
        description: "",
        type: "front",
        component: "TextAreaField",
        defaultValue: "",
        validation: "",
        values: "",
      },
      {
        id: crypto.randomUUID(),
        name: "Respuesta",
        description: "",
        type: "back",
        component: "TextAreaField",
        defaultValue: "",
        validation: "",
        values: "",
      },
    ];
    setFields(initialFields);
    form.setValues({
      ...form.values,
      id: crypto.randomUUID(),
    });
  }, []);

  const { mutateAsync } = trpc.schema.create.useMutation();

  const form = useForm<Pick<Schema, "id" | "name">>({
    validate: zodResolver(TemplateSchema.pick({ id: true, name: true })),
    validateInputOnChange: true,
    initialValues: {
      id: "",
      name: "",
    },
  });

  const handleSubmit = async (values: Pick<Schema, "id" | "name">) => {
    const newSchema: Schema = {
      id: values.id,
      name: values.name,
      fields,
    };
    await mutateAsync(newSchema)
      .then(() => {
        showNotification({
          title: "Nuevo esquema",
          message: "Se ha agregado un nuevo esquema",
          color: "green",
        });
        handleCancel();
      })
      .catch((err) => {
        showNotification({
          title: "Error al agregar esquema",
          message: err.message,
          color: "red",
        });
      });
  };

  //TODO: Add cancel button
  const handleCancel = () => {
    form.reset();
  };

  return (
    <div className="flex min-w-[0px] grow-2 basis-[760px] flex-col bg-main-dark text-white">
      <form
        className="flex h-full max-h-full overflow-hidden"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <div className="flex h-full max-h-full max-w-full flex-initial shrink grow-2 flex-col overflow-hidden px-10">
          <div
            id="body"
            className="mx-auto mt-4 flex h-full w-[calc(100%)] max-w-[860px] flex-initial grow-2 flex-row overflow-hidden"
          >
            <div className="w-full">
              <Flex justify="space-between" align="center">
                <Input
                  placeholder="Nombre del esquema"
                  className="mr-4 w-full"
                  {...form.getInputProps("name")}
                />
                <Button variant="default" type="submit">
                  Generar
                </Button>
              </Flex>

              <SideSchema
                side="Frente"
                type="front"
                fields={fields}
                setFields={setFields}
              />
              <SideSchema
                side="Reverso"
                type="back"
                fields={fields}
                setFields={setFields}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
