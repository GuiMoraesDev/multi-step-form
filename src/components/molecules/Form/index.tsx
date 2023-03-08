import Link from "components/atoms/Link";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  description: string;
  backLink?: string;
  nextLink?: string;
  finishLink?: string;
};

export default function Form({
  title,
  description,
  backLink,
  nextLink,
  finishLink,
  children,
}: PropsWithChildren<Props>) {
  return (
    <form className="flex flex-col justify-between py-6 gap-4 mx-auto w-[60%]">
      <header className="flex flex-col gap-2">
        <h1 className="text-marine-blue text-3xl font-bold">{title}</h1>
        <small className="text-cool-gray">{description}</small>
      </header>

      {children}

      <section className="flex items-center justify-between">
        {backLink ? (
          <Link variant="secondary" href={backLink}>
            Go Back
          </Link>
        ) : null}

        {nextLink ? <Link className="ml-auto" href={nextLink}>Next Step</Link> : null}
        
        {finishLink ? <Link className="ml-auto" href={finishLink}>Confirm</Link> : null}
      </section>
    </form>
  );
}
