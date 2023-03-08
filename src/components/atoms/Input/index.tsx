import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { hasError, ...props },
  ref
) => {
  return (
    <input
      {...props}
      className={`p-3 rounded-md border outline-pastel-blue ${
        hasError && "border-strawberry-red"
      }`}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
