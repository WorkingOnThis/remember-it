interface HeaderProps {
  title: string;
  buttons?: React.ReactNode;
}

export const Header = ({ title, buttons }: HeaderProps) => {
  return (
    <header className="relative flex min-h-[57px] max-w-[100vw] shrink-0 items-center justify-between border-x-0 border-t-0 border-b border-solid border-divider px-4">
      <div className="min-w-0 flex items-center gap-[8px]">
        <div className="ml-[6px] flex items-center">
          {/* 
    font-style: normal;
    color: rgb(238, 239, 252);
           */}
          <span className="shrink overflow-hidden text-ellipsis whitespace-nowrap text-left text-xs font-medium leading-normal text-white">
            {title}
          </span>
        </div>
      </div>
      <div className="flex w-auto flex-auto items-center justify-end">
        {buttons}
      </div>
    </header>
  );
};
