import { PropsWithChildren } from "react";
import NextLink, { LinkProps } from "next/link";
import { colorVariants, ColorVariantsOptions } from "styles/theme";

type Props = PropsWithChildren<LinkProps> & {
  variant?: ColorVariantsOptions;
  className?: string;
};

export default function Link({
  children,
  variant = "primary",
  ...props
}: Props) {
  const { className } = props;
  return (
    <NextLink
      {...props}
      className={`border rounded-lg shadow-md px-6 py-4 font-medium font-sans ${colorVariants[variant]} transition-all ${className}`}
    >
      {children}
    </NextLink>
  );
}
