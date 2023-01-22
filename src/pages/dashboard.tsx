import { type NextPage } from "next";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { MyDecks } from "../components/screens/decks";
import { unstable_getServerSession } from "../libs/unstable_getServerSession";
import { authOptions } from "./api/auth/[...nextauth]";

const DashboardPage: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <MyDecks />
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  console.log("session", session);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
