import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Star } from "tabler-icons-react";
import { trpc } from "../../../utils/trpc";

export const DeckFooter = ({
  id,
  defaultDeck,
}: {
  id: string;
  defaultDeck: string;
}) => {
  const isDefault = id === defaultDeck;
  const { mutateAsync } = trpc.deck.updateDefault.useMutation();
  const listDecks = trpc.deck.getAll.useQuery();

  const handleUpdate = async () => {
    await mutateAsync({ id })
      .then(() => {
        listDecks.refetch();
        showNotification({
          title: "Mazo actualizado",
          message: "Se ha actualizado el mazo por defecto",
          color: "green",
        });
      })
      .catch((err) => {
        showNotification({
          title: "Error modificar mazo",
          message: err.message,
          color: "red",
        });
      });
  };

  return (
    <div className="flex w-full flex-initial flex-row items-center justify-between rounded-md rounded-tl-none rounded-tr-none border-x-0 border-t border-b-0 border-solid border-divider bg-mate py-[6px] px-[12px]">
      <Star
        size={18}
        strokeWidth={2}
        color={isDefault ? "#6c79ff" : "#858699"}
      />
      {isDefault ? (
        <span className="shrink-0 cursor-default whitespace-nowrap text-left text-xs font-normal text-gray-options">
          Mazo por defecto
        </span>
      ) : (
        <Button
          className="hover:bg-sky-700 h-[20px] shrink-0 cursor-pointer whitespace-nowrap px-1 text-left text-xs font-normal text-gray-options hover:bg-transparent hover:text-white"
          variant="subtle"
          onClick={() => handleUpdate()}
        >
          Establecer como mazo por defecto
        </Button>
      )}
    </div>
  );
};
