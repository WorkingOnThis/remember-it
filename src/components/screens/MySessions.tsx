import { Header } from "@ui/Header";

export const MySessions = () => {
  return (
    <>
      <Header />

      <div className="flex h-full min-w-[575px] flex-auto flex-col overflow-hidden">
        <div className="relative w-full overflow-auto will-change-transform">
          <div>Mis sesiónes</div>
        </div>
      </div>
    </>
  );
};
