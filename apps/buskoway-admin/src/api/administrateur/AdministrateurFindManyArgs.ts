import { AdministrateurWhereInput } from "./AdministrateurWhereInput";
import { AdministrateurOrderByInput } from "./AdministrateurOrderByInput";

export type AdministrateurFindManyArgs = {
  where?: AdministrateurWhereInput;
  orderBy?: Array<AdministrateurOrderByInput>;
  skip?: number;
  take?: number;
};
