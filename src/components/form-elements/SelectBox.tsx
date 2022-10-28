import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

export type SelectBoxProps = {
  name: string;
  text?: string;
  label?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  isSingle?: boolean;
  disabled?: boolean;
  defaultValue?: string;
};

function SelectBox(props: PropsWithChildren<SelectBoxProps>) {
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
          <Select id={props.name} placeholder={props.placeholder} {...field}>
            {props.children}
          </Select>
          {props.text && <FormHelperText>{props.text}</FormHelperText>}
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
}

export default SelectBox;
