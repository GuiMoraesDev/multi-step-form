import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: Props) {
  return <input {...props} className="p-3 rounded-md border" />;
}
