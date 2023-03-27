import { ActionIcon, Button } from "@mantine/core";
import { Header } from "@ui/Header";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "tabler-icons-react";
import { trpc } from "../../../utils/trpc";
import { AddDeckModal } from "./AddDeckModal";
import { Deck } from "./Deck";

export const MyDecks = () => {
  const [opened, setOpened] = useState(false);
  const [idDeckSelected, setIdDeckSelected] = useState<string>("");
  const { data: listDecks } = trpc.deck.getAll.useQuery();

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
        {listDecks?.decks.map((deck) => (
          <Deck
            key={deck.id}
            setIdDeckSelected={setIdDeckSelected}
            {...deck}
            defaultDeck={listDecks.defaultDeck}
          />
        ))}
      </div>
      <div className="absolute top-0 bottom-0 z-[97px] w-[7px] grow-2 cursor-col-resize"></div>
      <div className="relative flex grow-2 flex-col items-center justify-center gap-[10px] border-l border-solid border-divider ">
        {idDeckSelected ? (
          listDecks?.decks.map((deck) => {
            if (deck.id === idDeckSelected) {
              return (
                <div className="flex flex-col items-center justify-center gap-[10px]">
                  <span className="text-2xl">{deck.name}</span>
                  {/* <Link href={`/study-session/${deck.id}`}> */}
                  <Link href={`/study-session?q=clfp32rk00000trp0kuhr6fp6`}>
                    <Button compact component="a">
                      Nueva sesión
                    </Button>
                  </Link>
                </div>
              );
            }
          })
        ) : (
          <span className="text-2xl">Seleccione un mazo</span>
        )}
      </div>
    </div>
  );
};
