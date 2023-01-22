import { Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { Card } from "../../../types/card";

export const SideBar = ({ form }: { form: UseFormReturnType<Card> }) => {
  console.log("sidebar");

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
              <span className="text-xs text-gray-options">Tipo</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  {...form.getInputProps("metadata.type")}
                  defaultValue="palabra"
                  data={[
                    // { value: TRANSLATION_TYPES.word, label: "Palabra" },
                    { value: "expresion", label: "Expresion" },
                    // { value: TRANSLATION_TYPES.statement, label: "Frase" },
                    { value: "verbo-frasal", label: "Verbo frasal" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-[90px] shrink-0">
              <span className="text-xs text-gray-options">Prioridad</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  {...form.getInputProps("metadata.priority")}
                  data={[
                    { value: "1", label: "1 - Alta" },
                    { value: "2", label: "2 - Media/Alta" },
                    { value: "3", label: "3 - Media" },
                    { value: "4", label: "4 - Media/Baja" },
                    { value: "5", label: "5 - Baja" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-[90px] shrink-0">
              <span className="text-xs text-gray-options">Refinado</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  // {...form.getInputProps("metadata.refined")}
                  data={[
                    { value: "No", label: "No" },
                    { value: "expresion", label: "Por mejorar" },
                    { value: "frase", label: "Si" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-[90px] shrink-0">
              <span className=" text-xs text-gray-options">Versión</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow-2 items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  disabled
                  // {...form.getInputProps("metadata.version")}
                  data={[{ value: "1.0.0", label: "1.0.0" }]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
