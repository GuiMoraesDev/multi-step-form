import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: "primary" | "secondary";
};

const variantsStyles = {
  primary:
    "bg-marine-blue text-white hover:bg-pastel-blue hover:text-marine-blue",
  secondary:
    "border text-cool-gray border-transparent bg-transparent hover:border-pastel-blue hover:text-marine-blue",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`border rounded-lg shadow-md px-6 py-4 font-semibold font-sans ${variantsStyles[variant]} transition-all`}
    >
      {children}
    </button>
  );
}
