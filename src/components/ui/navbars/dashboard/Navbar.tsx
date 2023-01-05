import { signOut } from "next-auth/react";

export const MainItem = ({ name }: { name: string }) => {
  return (
    <div className="my-[1px] block rounded">
      {/* 

    fill: rgb(133, 134, 153);
    font-style: normal;
    line-height: normal;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(210, 211, 224);
    font-size: var(--font-size-smallPlus);
    font-weight: 500; */}

      <span className="flex h-6 grow items-center truncate rounded pl-1 text-left text-xs font-medium not-italic leading-normal">
        {name}
      </span>
    </div>
  );
};

export const Divider = () => {
  return <div className="h-2 shrink-0"></div>;
};

export const Body = () => {
  return (
    <div className="ml-3 h-auto overflow-visible pb-1">
      {/* title */}
      <div className="relative -ml-2 flex flex-row pl-2"></div>
      {/* body */}
      <div className="h-auto overflow-visible">
        <div className="block pb-1">
          <div className="relative my-[1px] rounded text-xs">item 1</div>
          <div className="relative my-[1px] rounded">item 2</div>
          <div className="relative my-[1px] rounded">item 3</div>
        </div>
      </div>
    </div>
  );
};

export const Spacer = () => {
  return (
    // flex-shrink: initial;
    // flex-basis: initial;
    <div className="flex h-full grow flex-row"></div>
  );
};

export const Footer = () => {
  return (
    <div className="flex flex-col gap-1 pb-3">
      <div className="flex flex-initial flex-row items-center justify-between gap-1">
        agregado de boton
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="relative flex h-full w-56 min-w-[220px] max-w-[330px] shrink-0 flex-col border-r border-divider bg-main-dark">
      <div className="flex flex-initial flex-col items-stretch gap-2 py-2 px-3">
        Head
        <button
          onClick={() => {
            signOut();
          }}
        >
          Log out
        </button>
      </div>
      <div className="flex flex-initial grow flex-col overflow-y-auto px-3 ">
        <MainItem name="Inbox" />
        <MainItem name="My issues" />
        <MainItem name="Views" />

        <Divider />

        <Body />

        <Spacer />
        <Footer />
      </div>
      <span>
        <div className="absolute top-0 -right-1 h-full w-2 cursor-col-resize"></div>
      </span>
    </nav>
  );
};
