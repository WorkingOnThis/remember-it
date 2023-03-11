import { type NextPage } from "next";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { NewSchema } from "../components/screens/schemas/NewSchema";

const DashboardPage: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="absolute inset-0 overflow-hidden">
          <div className="flex h-full w-full">
            <NewSchema />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
