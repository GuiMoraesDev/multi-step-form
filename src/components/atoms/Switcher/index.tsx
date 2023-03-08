import { forwardRef, ForwardRefRenderFunction } from "react";

type Props = {
  firstOption: string;
  secondOption: string;
};

const Switcher: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { firstOption, secondOption, ...props },
  ref
) => (
  <label className="flex items-center gap-2">
    <input {...props} type="checkbox" hidden className="peer" ref={ref} />

    <p>{firstOption}</p>

    <span className="relative w-16 h-9 cursor-pointer bg-marine-blue rounded-full before:absolute before:w-6 before:h-6 before:rounded-full before:bottom-1/2 before:transition-all before:translate-y-1/2 before:bg-cool-gray before:left-0 before:translate-x-2 peer-checked:before:translate-x-8" />

    <p>{secondOption}</p>
  </label>
);

export default forwardRef(Switcher);
