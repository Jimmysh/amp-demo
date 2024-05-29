import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  stringField?: SortOrder;
  updatedAt?: SortOrder;
};
