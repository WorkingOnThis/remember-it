import { ActionIcon, Divider, Flex, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { Field } from "../../../types/field";
import { AddField } from "./AddField";
import { TextAreaField } from "./TextAreaField";

interface SideSchemaProps {
  side: string;
  type: "front" | "back";
  fields: Field[];
  setFields: (fields: Field[]) => void;
}

export const SideSchema = ({
  side,
  type,
  fields,
  setFields,
}: SideSchemaProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <AddField
        opened={opened}
        setOpened={setOpened}
        fields={fields}
        setFields={setFields}
      />
      <Flex justify="space-between" align="center" className="my-3">
        <Text fw={700}>{side}</Text>
        <ActionIcon
          color="red"
          variant="default"
          onClick={() => setOpened(true)}
        >
          <IconPlus size="1.125rem" />
        </ActionIcon>
      </Flex>
      <Divider mb="xs" />

      {fields.map((field, index) => {
        if (field.type === type) {
          switch (field.component) {
            case "TextAreaField":
              return <TextAreaField key={index} label={field.name} />;
            default:
              return <TextAreaField key={index} label={field.name} />;
          }
        }
      })}
    </div>
  );
};
