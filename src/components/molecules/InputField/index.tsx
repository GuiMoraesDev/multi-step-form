import Input, { Props as InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";

type Props = InputProps & {
  label: string;
};

export default function InputField({ label, ...props }: Props) {
  return (
    <Label>
      {label}
      <Input {...props} />
    </Label>
  );
}
