import Link from "next/link";

type Props = {
  number: number;
  title: string;
  href: string;
  isSelected: boolean;
};

export default function StepLink({
  number,
  title,
  href,
  isSelected = false,
}: Props) {
  return (
    <Link href={href} className="flex gap-2  text-sm uppercase">
      <span
        className={`flex items-center justify-center text-center h-10 w-10 rounded-full border-2 border-magnolia ${
          isSelected
            ? "text-marine-blue bg-magnolia"
            : "text-white bg-transparent"
        }`}
      >
        {number}
      </span>

      <section className="flex flex-col text-white">
        <p>{`Step ${number}`}</p>
        <strong>{title}</strong>
      </section>
    </Link>
  );
}
