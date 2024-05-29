import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="date" source="date" />
        <TextInput label="number" multiline source="numberField" />
        <TextInput label="string" source="stringField" />
      </SimpleForm>
    </Edit>
  );
};
