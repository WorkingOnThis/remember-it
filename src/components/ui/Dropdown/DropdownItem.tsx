import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type DropdownItemProps = PropsWithChildren<ComponentProps<"li">> & {
  onClick?: () => void;
  icon?: FC<ComponentProps<"svg">>;
};

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  onClick,
  icon: Icon,
}) => {
  return (
    <li
      className={classNames(
        "flex cursor-pointer items-center justify-start py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </li>
  );
};
