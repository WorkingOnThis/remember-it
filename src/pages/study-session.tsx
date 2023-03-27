import { type NextPage } from "next";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { StartSession } from "../components/screens/study-sessions/StartSession";
import { unstable_getServerSession } from "../libs/unstable_getServerSession";
import { authOptions } from "./api/auth/[...nextauth]";

const StudySessionPage: NextPage = () => {
  return (
    <>
      <DashboardLayout>
        <StartSession />
      </DashboardLayout>
    </>
  );
};

export default StudySessionPage;

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
