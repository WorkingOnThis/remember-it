import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { DropdownDivider } from "./DropdownDivider";

export const DropdownHeader: FC<PropsWithChildren<ComponentProps<"div">>> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <>
      <div
        className={classNames(
          "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
