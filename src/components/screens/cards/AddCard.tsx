import { trpc } from "../../../utils/trpc";
import { SideForm } from "./SideForm";

export const AddCard = ({ schemaSelected }: { schemaSelected: string }) => {
  const { data: fields } = trpc.field.getAllBySchemaId.useQuery({
    id: schemaSelected,
  });

  return (
    <div className="flex min-w-[0px] grow-2 basis-[760px] flex-col bg-main-dark text-white">
      <form className="flex h-full max-h-full overflow-hidden">
        <div className="flex h-full max-h-full max-w-full flex-initial shrink grow-2 flex-col overflow-hidden px-10">
          <div className="w-full">{JSON.stringify(fields, null, 2)}</div>
          <div
            id="body"
            className="mx-auto mt-4 flex h-full w-[calc(100%)] max-w-[860px] flex-initial grow-2 flex-row overflow-hidden"
          >
            {fields && (
              <div className="w-full">
                <SideForm side="Frente" type="front" fields={fields} />
                <SideForm side="Reverso" type="back" fields={fields} />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
