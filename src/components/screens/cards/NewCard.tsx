import { SideBar } from "./Sidebar";
import { AddCard } from "./AddCard";
import { useState } from "react";

export const NewCard = () => {
  const [schemaSelected, setSchemaSelected] = useState<string>("");
  const [deckSelected, setDeckSelected] = useState<string>("");

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full w-full">
        {schemaSelected && schemaSelected != "" && (
          <AddCard
            schemaSelected={schemaSelected}
            deckSelected={deckSelected}
          />
        )}
        <SideBar
          setSchemaSelected={setSchemaSelected}
          setDeckSelected={setDeckSelected}
        />
      </div>
    </div>
  );
};
