import { forwardRef, ForwardRefRenderFunction } from "react";

import Input, { Props as InputProps } from "../../atoms/Input";
import Label from "../../atoms/Label";

import ErrorMessage, {
  Props as ErrorProps,
} from "components/atoms/ErrorMessage";

type Props = InputProps &
  ErrorProps & {
    label: string;
  };

const InputField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, errorMessage, ...props },
  ref
) => {
  return (
    <Label>
      {label}
      <ErrorMessage errorMessage={errorMessage} />
      <Input {...props} hasError={!!errorMessage} ref={ref} />
    </Label>
  );
};

export default forwardRef(InputField);
