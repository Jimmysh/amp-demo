import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "stringField";

export const TestTitle = (record: TTest): string => {
  return record.stringField?.toString() || String(record.id);
};
