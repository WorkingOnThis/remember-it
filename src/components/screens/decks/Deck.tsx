import { ActionIcon } from "@mantine/core";
import { DotsVertical, Star } from "tabler-icons-react";
import { Deck as DeckProps } from "../../../types/deck";
import { DeckFooter } from "./DeckFooter";

export const Deck = ({
  id,
  name,
  defaultDeck,
}: DeckProps & { defaultDeck: string }) => {
  return (
    <div className="mx-[6px] mt-[6px] flex w-[calc(100%-12px)] flex-initial flex-col items-stretch justify-start rounded-md shadow-md">
      <div className="rounded-md border border-solid border-divider">
        <div className="grow-2 rounded-md rounded-bl-none rounded-br-none bg-secondary-dark">
          <div className="flex h-full min-h-[100px] w-full flex-row">
            <div className="flex min-h-[100px] w-full grow-2 items-center justify-center border-y-0 border-r border-l-0 border-solid border-divider">
              <div className="flex grow-2 flex-col text-center">
                <span className="text-xs">{name}</span>
              </div>
            </div>
            <div className="flex min-h-[100px] w-full grow-2">
              <div className="flex grow-2 flex-col">
                <div className="flex flex-row justify-end">
                  <ActionIcon className="mt-1 mr-1">
                    <DotsVertical size={16} />
                  </ActionIcon>
                </div>
                {/*  */}
                <div className="flex h-full grow-2 flex-col">
                  {/* 
                      color: rgb(210, 211, 224);
                   */}
                  <div className="mx-1 mt-1 flex flex-initial flex-row place-content-center items-center justify-between gap-[6px] rounded-md border border-solid border-divider bg-mate px-2 text-xs">
                    <span>Tarjetas:</span>
                    <span>15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeckFooter id={id} defaultDeck={defaultDeck} />
      </div>
    </div>
  );
};
