import { PropsWithChildren } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";

type FormProps = {
  id?: string;
  onSubmit: (values: any) => void;
  defaultValues?: any;
  methods?: UseFormReturn<any, object>;
};

function Form(props: PropsWithChildren<FormProps>) {
  const methods = useForm({ defaultValues: props.defaultValues });

  const choosedMethods = props.methods || methods;

  return (
    <FormProvider {...choosedMethods}>
      <form
        id={props.id}
        onSubmit={choosedMethods.handleSubmit(props.onSubmit)}
      >
        {props.children}
      </form>
    </FormProvider>
  );
}

export default Form;
