// interface SidebarProps {
//   metadataForm: UseFormReturnType<MetadataFormValues>;
// }

import { Dropdown } from "@ui/Dropdown";

// const SideBar = ({ metadataForm }: SidebarProps) => {
export const SideBar = () => {
  console.log("sidebar");

  return (
    <div className="grow relative min-w-[320px] max-w-[480px] border-y-0 border-r-0 border-l border-solid border-divider bg-secondary-dark">
      <div className="flex flex-row ">
        <div className="h-14 mx-4 flex flex-1 items-center">
          <div className="flex flex-1 flex-row items-center justify-between">
            <div className="w-24 my-2 shrink-0">
              {/* TODO: ver todos los atributos de letra */}
              <span className="text-xs text-gray-options">Detalles</span>
            </div>
          </div>
        </div>
        <div className="absolute top-8 h-full w-full overflow-y-auto py-3 pl-4 pr-1">
          <div className="mb-3 flex flex-initial flex-row">
            <div className="w-24 my-2 shrink-0">
              <span className="text-gray-options">Tipo</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="grow mr-5 flex h-full max-w-full shrink items-center justify-start overflow-hidden px-2">
                <Dropdown
                  label="Dropdown button"
                  dismissOnClick={false}
                  size="xs"
                >
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>

                {/* <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("type")}
                  defaultValue="palabra"
                  data={[
                    { value: TRANSLATION_TYPES.word, label: "Palabra" },
                    { value: "expresion", label: "Expresion" },
                    { value: TRANSLATION_TYPES.statement, label: "Frase" },
                    { value: "verbo-frasal", label: "Verbo frasal" },
                  ]}
                /> */}
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="w-24 my-2 shrink-0">
              <span className="text-gray-options">Prioridad</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="grow mr-5 flex h-full max-w-full shrink items-center justify-start overflow-hidden px-2">
                {/* <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("priority")}
                  data={[
                    { value: "1", label: "1 - Alta" },
                    { value: "2", label: "2 - Media/Alta" },
                    { value: "3", label: "3 - Media" },
                    { value: "4", label: "4 - Media/Baja" },
                    { value: "5", label: "5 - Baja" },
                  ]}
                /> */}
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="w-24 my-2 shrink-0">
              <span className="text-gray-options">Refinado</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="grow mr-5 flex h-full max-w-full shrink items-center justify-start overflow-hidden px-2">
                {/* <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("refined")}
                  data={[
                    { value: "No", label: "No" },
                    { value: "expresion", label: "Por mejorar" },
                    { value: "frase", label: "Si" },
                  ]}
                /> */}
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="w-24 my-2 shrink-0">
              <span className="text-gray-options">Versión</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="grow mr-5 flex h-full max-w-full shrink items-center justify-start overflow-hidden px-2">
                {/* <Select
                  placeholder="Seleccionar"
                  disabled
                  {...metadataForm.getInputProps("version")}
                  data={[{ value: "1.0.0", label: "1.0.0" }]}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
