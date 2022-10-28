/* eslint-disable react/no-unused-prop-types */
import {
  Checkbox as ChakraCheckbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

export type CheckBoxProps = {
  name: string;
  text?: string;
  label?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  isSingle?: boolean;
  disabled?: boolean;
  defaultValue?: string;
};

function CheckBox(props: CheckBoxProps) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      defaultValue={props.defaultValue || false}
      control={control}
      name={props.name}
      rules={props.rules}
      render={({ field: { value, name }, fieldState: { invalid, error } }) => (
        <FormControl isInvalid={invalid}>
          {props.label && (
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
          )}
          <ChakraCheckbox
            isChecked={value}
            onChange={(e) => setValue(name, e.target.checked)}
          >
            <Text size="sm">{props.placeholder}</Text>
          </ChakraCheckbox>
          {props.text && <FormHelperText>{props.text}</FormHelperText>}
          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
}

export default CheckBox;
