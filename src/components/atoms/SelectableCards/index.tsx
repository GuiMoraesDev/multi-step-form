import { forwardRef, ForwardRefRenderFunction } from "react";
import Image from "next/image";

type Props = {
  image_src: string;
  image_alt: string;
  title: string;
  price: string;
  name: string;
  value: string;
  isRecommended?: boolean;
};

const SelectableCards: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    image_src,
    image_alt,
    title,
    price,
    value,
    isRecommended = false,
    ...props
  },
  ref
) => {
  return (
    <section className="flex w-full h-full">
      <input
        type="radio"
        className="peer"
        id={image_alt}
        value={value}
        hidden
        {...props}
        ref={ref}
      />

      <label
        htmlFor={image_alt}
        className=" flex flex-col justify-between w-full border p-4 rounded-xl gap-12 hover:border-marine-blue hover:cursor-pointer transition-all peer-checked:ring-marine-blue peer-checked:ring-2 peer-checked:border-transparent peer-checked:bg-magnolia"
      >
        <Image src={image_src} alt={image_alt} width={50} height={50} />

        <section className="flex flex-col gap-2">
          {isRecommended ? (
            <span className=" text-cool-gray text-xs">Recommended</span>
          ) : null}

          <strong className="text-lg text-marine-blue">{title}</strong>

          <p className="text-cool-gray">{price}</p>
        </section>
      </label>
    </section>
  );
};

export default forwardRef(SelectableCards);
