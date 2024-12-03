import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";

export const WarehouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="capacity" source="capacity" />
        <ReferenceArrayInput source="inventories" reference="Inventory">
          <SelectArrayInput
            optionText={InventoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
