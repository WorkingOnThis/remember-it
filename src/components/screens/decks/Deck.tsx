import { Deck as DeckProps } from "../../../types/deck";

export const Deck = ({ name }: DeckProps) => {
  return (
    <div className="m-[6px] flex w-[calc(100%-12px)] flex-initial flex-col items-stretch justify-start rounded-md shadow-md">
      <div>
        <div className="min-h-[100px] grow-2 rounded-md rounded-bl-none rounded-br-none border border-solid border-divider bg-secondary-dark p-[6px]">
          {name}
        </div>
        <div className="flex w-full flex-initial flex-row justify-end rounded-r-md rounded-l-md rounded-tl-none rounded-tr-none border-0 border-x border-b border-solid border-divider bg-mate py-[6px] px-[12px]">
          <span className="shrink-0 whitespace-nowrap text-left text-xs font-normal text-gray-options">
            Establecer mazo por defecto.
          </span>
        </div>
      </div>
    </div>
  );
};
