import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Field, FieldSchema } from "../../../types/field";
import { useEffect } from "react";

export const AddField = ({
  opened,
  setOpened,
  fields,
  setFields,
}: {
  opened: boolean;
  setOpened: (open: boolean) => void;
  fields: Field[];
  setFields: (fields: Field[]) => void;
}) => {
  const form = useForm<Field>({
    validate: zodResolver(FieldSchema),
    validateInputOnChange: true,
  });

  useEffect(() => {
    form.setValues({
      name: "",
      description: "",
      type: "front",
      component: "TextAreaField",
      defaultValue: "",
      validation: "",
      values: "",
      id: crypto.randomUUID(),
    });
  }, []);

  const handleSubmit = async (values: Field) => {
    const newField = {
      ...values,
    };
    setFields([...fields, newField]);
    setOpened(false);
  };

  const handleCancel = () => {
    form.reset();
    setOpened(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => handleCancel()}
      title={<span className="text-sm">Agregar campo</span>}
    >
      <form
        className="flex h-full max-h-full overflow-hidden"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <div className="flex h-full max-h-full max-w-full flex-initial shrink grow-2 flex-col overflow-hidden ">
          <div
            id="body"
            className="mx-auto mt-1 flex h-full w-[calc(100%)] max-w-[860px] flex-initial grow-2 flex-row overflow-hidden"
          >
            <div className="w-full">
              <TextInput
                label={
                  <div className="text-base mb-1">
                    <span>Nombre </span>
                    <span className="text-red">*</span>
                  </div>
                }
                {...form.getInputProps("name")}
                placeholder="Nombre del mazo"
                className="mb-4"
              />
              <Textarea
                label={<div className="text-base mb-1">Descripción</div>}
                {...form.getInputProps("description")}
                placeholder="Descripción del mazo"
                autosize
                minRows={2}
                className="mb-4"
              />
              <div className="mx-1 mt-7 mb-1 flex flex-row justify-between">
                <Button
                  color="red"
                  variant="filled"
                  compact
                  onClick={() => {
                    handleCancel();
                  }}
                >
                  Cancelar
                </Button>
                <Button color="primary" variant="filled" compact type="submit">
                  Agregar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
