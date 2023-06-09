import { useEffect } from "react";
import { Select } from "@mantine/core";
import { trpc } from "../../../utils/trpc";

export const SideBar = ({
  setSchemaSelected,
  setDeckSelected,
}: {
  setSchemaSelected: (schemaSelected: string) => void;
  setDeckSelected: (deckSelected: string) => void;
}) => {
  const { data: listSchemaNames } = trpc.schema.getNamesByUser.useQuery();
  const { data: listDecks } = trpc.deck.getAll.useQuery();

  useEffect(() => {
    if (listSchemaNames && listSchemaNames[0]) {
      setSchemaSelected(listSchemaNames[0].id);
    }
  }, [listSchemaNames]);

  useEffect(() => {
    if (listDecks && listDecks.decks[0]) {
      setDeckSelected(listDecks.defaultDeck);
    }
  }, [listDecks]);

  return (
    <div className="relative min-w-[320px] max-w-[480px] grow-2 border-y-0 border-r-0 border-l border-solid border-divider bg-secondary-dark">
      <div className="flex flex-row ">
        <div className="h-14 mx-4 flex flex-1 items-center">
          <div className="flex flex-1 flex-row items-center justify-between">
            <div className="my-2 w-[90px] shrink-0">
              <span className="text-xs text-gray-options">Detalles</span>
            </div>
          </div>
        </div>
        <div className="absolute top-8 h-full w-full overflow-y-auto py-3 pl-4 pr-1">
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-[90px] shrink-0">
              <span className="text-xs text-gray-options">Esquema</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                {listSchemaNames && (
                  // select first as default
                  <Select
                    placeholder="Seleccionar"
                    onChange={(value: string) =>
                      value && value != "" && setSchemaSelected(value)
                    }
                    defaultValue={listSchemaNames[0]?.id}
                    data={listSchemaNames.map(({ id, name }) => ({
                      value: id,
                      label: name,
                    }))}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-[90px] shrink-0">
              <span className="text-xs text-gray-options">Destino</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                {listDecks && (
                  <Select
                    placeholder="Seleccionar"
                    onChange={(value: string) =>
                      value && value != "" && setDeckSelected(value)
                    }
                    defaultValue={listDecks.defaultDeck}
                    data={listDecks.decks.map(({ id, name }) => ({
                      value: id,
                      label: name,
                    }))}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
