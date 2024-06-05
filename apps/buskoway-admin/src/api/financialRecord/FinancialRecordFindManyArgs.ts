import { FinancialRecordWhereInput } from "./FinancialRecordWhereInput";
import { FinancialRecordOrderByInput } from "./FinancialRecordOrderByInput";

export type FinancialRecordFindManyArgs = {
  where?: FinancialRecordWhereInput;
  orderBy?: Array<FinancialRecordOrderByInput>;
  skip?: number;
  take?: number;
};
