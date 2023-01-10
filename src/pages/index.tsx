import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { Button } from "@ui/Buttonbk";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Button
          onClick={() => {
            signIn();
          }}
        >
          Log in
        </Button>
      </div>
    </>
  );
};

export default Home;
