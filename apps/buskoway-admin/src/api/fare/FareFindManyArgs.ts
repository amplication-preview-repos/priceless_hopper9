import { FareWhereInput } from "./FareWhereInput";
import { FareOrderByInput } from "./FareOrderByInput";

export type FareFindManyArgs = {
  where?: FareWhereInput;
  orderBy?: Array<FareOrderByInput>;
  skip?: number;
  take?: number;
};
