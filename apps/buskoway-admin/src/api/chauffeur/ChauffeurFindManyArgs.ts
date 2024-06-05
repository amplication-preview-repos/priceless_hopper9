import { ChauffeurWhereInput } from "./ChauffeurWhereInput";
import { ChauffeurOrderByInput } from "./ChauffeurOrderByInput";

export type ChauffeurFindManyArgs = {
  where?: ChauffeurWhereInput;
  orderBy?: Array<ChauffeurOrderByInput>;
  skip?: number;
  take?: number;
};
