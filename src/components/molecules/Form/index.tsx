import { HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLFormElement> & {
  title: string;
  description: string;
};

export default function Form({
  title,
  description,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <form
      {...props}
      className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]"
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-marine-blue text-3xl font-bold">{title}</h1>
        <small className="text-cool-gray">{description}</small>
      </header>

      {children}
    </form>
  );
}
