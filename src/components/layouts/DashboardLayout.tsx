import { FC } from "react";
import Head from "next/head";
import { Navbar } from "@ui/index";

interface Props {
  children: React.ReactNode | undefined;
  title?: string;
}

export const DashboardLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className="flex h-full min-h-full w-full flex-row items-stretch overflow-hidden bg-main-dark">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </Head>

      <Navbar />

      <main className="relative flex w-full flex-initial  grow-2 flex-col place-items-stretch overflow-auto">
        {children}
      </main>
    </div>
  );
};
