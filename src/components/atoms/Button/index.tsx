import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="ml-auto border rounded-lg shadow-md px-6 py-4 bg-marine-blue text-white text-bold font-sans"
    >
      {children}
    </button>
  );
}
