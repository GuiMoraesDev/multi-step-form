export type Props = {
  errorMessage?: string;
};

export default function ErrorMessage({ errorMessage }: Props) {
  if (!errorMessage) return null;

  return (
    <span className="absolute top-0 right-0 text-strawberry-red">
      {errorMessage}
    </span>
  );
}
