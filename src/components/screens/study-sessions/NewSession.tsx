import { useState } from "react";
import { trpc } from "../../../utils/trpc";

export const NewSession = ({ deckId }: { deckId: string }) => {
  const [page, setPage] = useState(0);

  const { data, fetchNextPage } = trpc.card.getBatch.useInfiniteQuery(
    { limit: 4, deckId },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  const handleFetchNextPage = () => {
    fetchNextPage();
    setPage((prev) => prev + 1);
  };

  const handleFetchPreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  const toShow = data?.pages[page]?.items;

  return (
    <>
      <div className="flex h-full min-w-[575px] flex-auto flex-col overflow-hidden">
        <div className="relative w-full overflow-auto will-change-transform">
          {/* <div>Mis sesiónes</div> */}
          <div>{JSON.stringify(toShow)}</div>
        </div>
      </div>
    </>
  );
};
