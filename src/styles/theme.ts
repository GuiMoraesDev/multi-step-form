export type ColorVariantsOptions = "primary" | "secondary";

type ColorVariants = Record<ColorVariantsOptions, string>;

export const colorVariants: ColorVariants = {
  primary:
    "bg-marine-blue text-white hover:bg-pastel-blue hover:text-marine-blue",
  secondary:
    "border text-cool-gray border-transparent bg-transparent hover:border-pastel-blue hover:text-marine-blue",
};
