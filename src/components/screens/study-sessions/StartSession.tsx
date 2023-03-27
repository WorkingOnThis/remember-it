import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { useEffect, useState } from "react";
import { Card } from "../cards/Card";

export const StartSession = () => {
  const router = useRouter();
  const { q } = router.query as { q: string };
  const [cardIdSelected, setCardIdSelected] = useState<string>("");

  const { data: listCardsId } = trpc.studySession.getCards.useQuery({
    studySessionId: q,
  });
  // get random id from listCardsId

  useEffect(() => {
    if (!listCardsId) return;
    const randomId = Math.floor(Math.random() * listCardsId.length);
    const cardSelected = listCardsId[randomId]!.id as string;
    setCardIdSelected(cardSelected);
  }, [listCardsId]);

  return (
    <>
      <div className="flex h-full min-w-[575px] flex-auto flex-col overflow-hidden">
        <div className="relative w-full overflow-auto will-change-transform">
          {/* <div>Mis sesiónes</div> */}
          {/* <Card  /> */}
        </div>
      </div>
    </>
  );
};
