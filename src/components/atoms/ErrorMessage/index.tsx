export type Props = {
  errorMessage?: string;
  positionY?: "top" | "bottom";
  positionX?: "right" | "left" | "center";
};

export default function ErrorMessage({
  errorMessage,
  positionY = "top",
  positionX = "right",
}: Props) {
  if (!errorMessage) return null;

  const YAxis = `${positionY}-0`;
  const XAxis = positionX === "center" ? "w-full text-center" : `${positionX}-0`;

  return (
    <span className={`absolute text-strawberry-red ${YAxis} ${XAxis}`}>
      {errorMessage}
    </span>
  );
}
