import { SideBar } from "@ui/sidebars/Sidebar";
import { AddCardDefaultForm } from "../forms/AddCardDefaultForm";

export const NewCard = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full w-full">
        <AddCardDefaultForm />
        <SideBar />
      </div>
    </div>
  );
};
