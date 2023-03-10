type Props = {
  number: number;
  title: string;
  isSelected: boolean;
};

export default function StepIndex({
  number,
  title,
  isSelected = false,
}: Props) {
  return (
    <div className="flex gap-4 text-sm uppercase">
      <span
        className={`flex items-center justify-center font-bold text-center h-9 w-9 rounded-full border-2 border-pastel-blue ${
          isSelected
            ? "text-marine-blue bg-pastel-blue"
            : "text-white bg-transparent"
        }`}
      >
        {number}
      </span>

      <section className="hidden xl:flex flex-col">
        <p className="text-xs text-pastel-blue">{`Step ${number}`}</p>
        <strong className="font-bold text-white">{title}</strong>
      </section>
    </div>
  );
}
