import { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLLabelElement>>;

export default function Label({ children, ...props }: Props) {
  return (
    <label
      {...props}
      className="flex flex-col text-marine-blue font-semi gap-1"
    >
      {children}
    </label>
  );
}
