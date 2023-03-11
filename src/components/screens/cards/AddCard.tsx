import { ActionIcon, Button, SegmentedControl, Textarea } from "@mantine/core";
import Link from "next/link";
import { ArrowsUpDown, Refresh, ClearAll } from "tabler-icons-react";
import { trpc } from "../../../utils/trpc";

export const AddCard = ({ schemaSelected }: { schemaSelected: string }) => {
  const { data: fields } = trpc.field.getAllBySchemaId.useQuery({
    id: schemaSelected,
  });

  return (
    <div className="flex min-w-[0px] grow-2 basis-[760px] flex-col bg-main-dark text-white">
      <form className="flex h-full max-h-full overflow-hidden">
        <div className="flex h-full max-h-full max-w-full flex-initial shrink grow-2 flex-col overflow-hidden px-10">
          <div
            id="title"
            className="flex flex-initial flex-row gap-0 pt-2 pb-1"
          >
            <div className="basis-initial flex shrink-0 grow-2 flex-row items-center gap-1">
              <Link href="/" passHref>
                <Button color="violet" variant="filled" compact>
                  Default
                </Button>
              </Link>
              <span className="text-xs">Nueva traducción</span>
            </div>
            <div className="basis-initial grow flex shrink-0 flex-row items-center justify-start gap-2">
              <Button variant="subtle" compact>
                Cancelar
              </Button>
              <Button compact variant="filled">
                Agregar
              </Button>
            </div>
          </div>
          <div
            id="body"
            className="mx-auto mt-4 flex h-full w-[calc(100%)] max-w-[860px] flex-initial grow-2 flex-row overflow-hidden"
          >
            <div className="w-full">
              {JSON.stringify(fields, null, 2)}

              <Textarea
                label={<div className="text-base mb-1">A traducir:</div>}
                // {...translationForm.getInputProps("sourceText")}
                placeholder="Texto a traducir"
                autosize
                minRows={2}
              />
              <div className="mt-2 flex flex-row justify-between">
                <ActionIcon variant="filled">
                  <ArrowsUpDown size={18} />
                </ActionIcon>
                <SegmentedControl
                  color="red"
                  // {...translationForm.getInputProps("language")}
                  data={[
                    { value: "en", label: "Ingles" },
                    { value: "es", label: "Español" },
                  ]}
                />
              </div>
              <Textarea
                label={<div className="text-base mb-1">Traducción:</div>}
                // {...translationForm.getInputProps("destination")}
                placeholder="Texto traducido"
                autosize
                minRows={2}
              />
              <div className="mt-3 flex flex-row justify-between">
                <Button
                  color="gray"
                  variant="filled"
                  compact
                  rightIcon={<ClearAll size={18} />}
                >
                  Reiniciar
                </Button>
                <Button
                  color="gray"
                  variant="filled"
                  compact
                  rightIcon={<Refresh size={18} />}
                >
                  Refrescar
                </Button>
              </div>
            </div>
          </div>
          <div
            id="footer"
            className="mx-auto mt-4 mb-1 flex w-full max-w-4xl shrink flex-col"
          ></div>
        </div>
      </form>
    </div>
  );
};
