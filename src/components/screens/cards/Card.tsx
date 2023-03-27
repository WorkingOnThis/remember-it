import { trpc } from "../../../utils/trpc";

export const Card = ({ cardId }: { cardId: string }) => {
  const { data: card } = trpc.card.getValuesByCardId.useQuery({ cardId });

  return (
    <div className="flex min-w-[0px] grow-2 basis-[760px] flex-col bg-main-dark text-white">
      <div className="flex h-full max-h-full overflow-hidden">
        <div className="flex h-full max-h-full max-w-full flex-initial shrink grow-2 flex-col overflow-hidden px-10">
          <div
            id="body"
            className="mx-auto mt-4 flex h-full w-[calc(100%)] max-w-[860px] flex-initial grow-2 flex-row overflow-hidden"
          >
            {/* {fields && <div className="w-full"></div>} */}
          </div>
        </div>
      </div>
    </div>
  );
};
