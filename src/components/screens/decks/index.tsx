import { ActionIcon } from "@mantine/core";
import { Header } from "@ui/Header";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { AddDeckModal } from "./AddDeckModal";
import { Deck } from "./Deck";

export const MyDecks = () => {
  const [opened, setOpened] = useState(false);

  const decks = [
    {
      id: "1",
      name: "Mazo 1",
      description: "Mazo de prueba 1",
    },
    {
      id: "2",
      name: "Mazo 2",
      description: "Mazo de prueba 2",
    },
    {
      id: "3",
      name: "Mazo 3",
      description: "Mazo de prueba 3",
    },
  ];

  return (
    <div className="relative flex h-full place-content-stretch items-stretch overflow-hidden">
      <AddDeckModal opened={opened} setOpened={setOpened} />
      <div className="relative flex w-[400px] max-w-[400px] shrink-0 grow-2 flex-col">
        <Header
          title="Mis mazos"
          buttons={
            <ActionIcon onClick={() => setOpened(true)}>
              <Plus size={18} />
            </ActionIcon>
          }
        />
        {/* <div className="m-[6px] flex w-[calc(100%-12px)] flex-initial flex-col items-stretch justify-start rounded-md shadow-md">
          <div>
            <div className="min-h-[100px] grow-2 rounded-md rounded-bl-none rounded-br-none border border-solid border-divider bg-secondary-dark p-[6px]">
              Mis sesiónes
            </div>
            <div className="flex w-full flex-initial flex-row justify-end rounded-r-md rounded-l-md rounded-tl-none rounded-tr-none border-0 border-x border-b border-solid border-divider bg-mate py-[6px] px-[12px]">
              <span className="shrink-0 whitespace-nowrap text-left text-xs font-normal text-gray-options">
                Establecer mazo por defecto.
              </span>
            </div>
          </div>
        </div> */}
        {decks.map((deck) => (
          <Deck key={deck.id} {...deck} />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 z-[97px] w-[7px] grow-2 cursor-col-resize"></div>
      <div className="relative flex grow-2 flex-col items-center justify-center gap-[10px] border-l border-solid border-divider ">
        Seleccione un mazo
      </div>
    </div>
  );
};
