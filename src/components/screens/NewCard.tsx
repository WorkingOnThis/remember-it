import { useForm, zodResolver } from "@mantine/form";
import { SideBar } from "@ui/sidebars/Sidebar";
import { Card, CardSchema } from "../../types/card";
import { AddCardDefaultForm } from "../forms/AddCardDefaultForm";

export const NewCard = () => {
  const newCardForm = useForm<Card>({
    validate: zodResolver(CardSchema),
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full w-full">
        <AddCardDefaultForm />
        <SideBar form={newCardForm} />
      </div>
    </div>
  );
};
