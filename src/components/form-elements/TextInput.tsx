import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

export type TextInputProps = {
  name: string;
  text?: string;
  label?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  isSingle?: boolean;
  type?: "text" | "email" | "password";
  disabled?: boolean;
  defaultValue?: string;
};

function TextInput(props: TextInputProps) {
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
          <Input
            id={props.name}
            placeholder={props.placeholder}
            type={props.type}
            {...field}
          />
          {props.text && <FormHelperText>{props.text}</FormHelperText>}
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
}

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
