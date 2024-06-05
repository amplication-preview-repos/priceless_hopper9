import { TransportCardWhereInput } from "./TransportCardWhereInput";
import { TransportCardOrderByInput } from "./TransportCardOrderByInput";

export type TransportCardFindManyArgs = {
  where?: TransportCardWhereInput;
  orderBy?: Array<TransportCardOrderByInput>;
  skip?: number;
  take?: number;
};
