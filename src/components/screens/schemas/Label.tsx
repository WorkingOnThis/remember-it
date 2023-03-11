import { ActionIcon, Flex, Text } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons";

export const Label = ({ label }: { label: string }) => {
  return (
    <Flex justify="space-between" align="center" className="mb-1">
      <Text fw={500} color="#C1C2C5" size={14} className="my-2">
        {label}
      </Text>
      <ActionIcon
        color="red"
        variant="default"
        // onClick={() => setOpened(true)}
      >
        <IconDotsVertical size="1.125rem" />
      </ActionIcon>
    </Flex>
  );
};
