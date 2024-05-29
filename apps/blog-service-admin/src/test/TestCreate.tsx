import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
        <TextInput label="number" multiline source="numberField" />
        <TextInput label="string" source="stringField" />
      </SimpleForm>
    </Create>
  );
};
