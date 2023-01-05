import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { translateText } from "./utils/translator";
import { LANGUAGES, TRANSLATORS, TRANSLATION_TYPES } from "../interfaces";

export interface MetadataFormValues {
  type: string;
  priority: string;
  refined: string;
  version: string;
}

interface SidebarProps {
  metadataForm: UseFormReturnType<MetadataFormValues>;
}

const SideBar = ({ metadataForm }: SidebarProps) => {
  console.log("sidebar");

  return (
    <div className="relative min-w-20 grow border-y-0 border-r-0 border-l border-solid border-divider bg-secondary-dark text-white">
      <div className="flex flex-row divide-y divide-slate-100">
        <div className="mx-4 flex h-14 flex-1 items-center">
          <div className="flex flex-1 flex-row items-center justify-between">
            <div className="my-2 w-24 shrink-0">
              {/* TODO: ver todos los atributos de letra */}
              <span className="text-gray-options">Detalles</span>
            </div>
          </div>
        </div>
        <div className="absolute top-8 h-full w-full overflow-y-auto py-3 pl-4 pr-1">
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-24 shrink-0">
              <span className="text-gray-options">Tipo</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("type")}
                  defaultValue="palabra"
                  data={[
                    { value: TRANSLATION_TYPES.word, label: "Palabra" },
                    { value: "expresion", label: "Expresion" },
                    { value: TRANSLATION_TYPES.statement, label: "Frase" },
                    { value: "verbo-frasal", label: "Verbo frasal" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-initial flex-row">
            <div className="my-2 w-24 shrink-0">
              <span className="text-gray-options">Prioridad</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("priority")}
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
            <div className="my-2 w-24 shrink-0">
              <span className="text-gray-options">Refinado</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  {...metadataForm.getInputProps("refined")}
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
            <div className="my-2 w-24 shrink-0">
              <span className="text-gray-options">Versión</span>
            </div>
            <div className="user-select flex w-full flex-initial flex-row">
              <div className="mr-5 flex h-full max-w-full shrink grow items-center justify-start overflow-hidden px-2">
                <Select
                  placeholder="Seleccionar"
                  disabled
                  {...metadataForm.getInputProps("version")}
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

export interface TranslationFormValues {
  sourceText: string;
  language: string;
  destination: string;
}

interface MainProps {
  translationForm: UseFormReturnType<TranslationFormValues>;
}

const Main = ({ translationForm }: MainProps) => {
  console.log("main");

  return (
    <div className="flex min-w-0 grow-2 basis-760 flex-col bg-main-dark text-white">
      <form className="flex h-full max-h-full overflow-hidden">
        <div className="flex h-full max-h-full max-w-full shrink grow flex-col overflow-hidden px-10">
          <div
            id="title"
            className="flex flex-initial flex-row gap-0 pt-2 pb-1"
          >
            <div className="basis-initial flex shrink-0 grow flex-row items-center gap-1">
              <Link href="/" passHref>
                <Button color="violet" variant="filled" compact>
                  Default
                </Button>
              </Link>
              Nueva traducción
            </div>
            <div className="grow-initial basis-initial flex shrink-0 flex-row items-center justify-start gap-2">
              <Button variant="subtle" compact>
                Cancelar
              </Button>
              <Button compact>Agregar</Button>
            </div>
          </div>

          <div
            id="body"
            className="mx-auto mt-4 flex h-full w-[calc(100%)] max-w-4xl flex-initial grow flex-row overflow-hidden"
          >
            <div className="w-full">
              <Textarea
                label={<div className="mb-1 text-base">A traducir:</div>}
                {...translationForm.getInputProps("sourceText")}
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
                  {...translationForm.getInputProps("language")}
                  data={[
                    { value: "en", label: "Ingles" },
                    { value: "es", label: "Español" },
                  ]}
                />
              </div>
              <Textarea
                label={<div className="mb-1 text-base">Traducción:</div>}
                {...translationForm.getInputProps("destination")}
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

export const New = () => {
  const router = useRouter();

  const translationForm = useForm<TranslationFormValues>({
    initialValues: {
      sourceText: "",
      language: "",
      destination: "",
    },
  });

  const metadataForm = useForm<MetadataFormValues>({
    initialValues: {
      type: "palabra",
      priority: "1",
      refined: "No",
      version: "1.0.0",
    },
  });

  useEffect(() => {
    const words = router.query.q as string;
    const wordsCount = words.split(" ").length;
    const translationType =
      wordsCount > 1 ? TRANSLATION_TYPES.statement : TRANSLATION_TYPES.word;

    metadataForm.setValues({
      type: translationType,
    });

    translateText({
      sourceText: router.query.q as string,
      sourceLanguage: LANGUAGES.en,
      destinationLanguage: LANGUAGES.es,
      translator: TRANSLATORS.google,
      translationType: translationType,
    }).then((translated) => {
      translationForm.setValues({
        sourceText: router.query.q as string,
        language: router.query.sl as string,
        destination: translated,
      });
    });
  }, [router]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full w-full">
        <Main translationForm={translationForm} />
        <SideBar metadataForm={metadataForm} />
      </div>
    </div>
  );
};
