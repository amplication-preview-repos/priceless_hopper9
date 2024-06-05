import { FinancialRecord as TFinancialRecord } from "../api/financialRecord/FinancialRecord";

export const FINANCIALRECORD_TITLE_FIELD = "id";

export const FinancialRecordTitle = (record: TFinancialRecord): string => {
  return record.id?.toString() || String(record.id);
};
