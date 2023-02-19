import { ActionIcon } from "@mantine/core";
import { Header } from "@ui/Header";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { trpc } from "../../../utils/trpc";
import { AddDeckModal } from "./AddDeckModal";
import { Deck } from "./Deck";

export const MyDecks = () => {
  const [opened, setOpened] = useState(false);
  const listDecks = trpc.deck.getAll.useQuery();

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
        {listDecks.data?.decks.map((deck) => (
          <Deck
            key={deck.id}
            {...deck}
            defaultDeck={listDecks.data.defaultDeck}
          />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 z-[97px] w-[7px] grow-2 cursor-col-resize"></div>
      <div className="relative flex grow-2 flex-col items-center justify-center gap-[10px] border-l border-solid border-divider ">
        Seleccione un mazo
      </div>
    </div>
  );
};
