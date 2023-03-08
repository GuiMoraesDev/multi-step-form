import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { colorVariants, ColorVariantsOptions } from "styles/theme";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: ColorVariantsOptions;
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`border rounded-lg shadow-md px-6 py-4 font-medium font-sans ${colorVariants[variant]} transition-all`}
    >
      {children}
    </button>
  );
}
