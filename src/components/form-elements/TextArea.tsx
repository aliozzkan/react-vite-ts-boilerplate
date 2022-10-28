import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

export type TextAreaProps = {
  name: string;
  text?: string;
  label?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  isSingle?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  rows?: number;
};

function TextArea(props: TextAreaProps) {
  const { control } = useFormContext();
  return (
    <Controller
      defaultValue={props.defaultValue || ""}
      control={control}
      name={props.name}
      rules={props.rules}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl isInvalid={invalid}>
          <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
          <Textarea
            id={props.name}
            placeholder={props.placeholder}
            resize="none"
            rows={props.rows}
            {...field}
          />
          {props.text && <FormHelperText>{props.text}</FormHelperText>}
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
}

TextArea.defaultProps = {
  rows: 2,
};

export default TextArea;
