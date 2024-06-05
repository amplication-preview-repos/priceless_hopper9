import { ReceptionnisteWhereInput } from "./ReceptionnisteWhereInput";
import { ReceptionnisteOrderByInput } from "./ReceptionnisteOrderByInput";

export type ReceptionnisteFindManyArgs = {
  where?: ReceptionnisteWhereInput;
  orderBy?: Array<ReceptionnisteOrderByInput>;
  skip?: number;
  take?: number;
};
