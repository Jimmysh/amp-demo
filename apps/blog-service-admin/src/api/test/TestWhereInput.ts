import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TestWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  stringField?: StringNullableFilter;
};
