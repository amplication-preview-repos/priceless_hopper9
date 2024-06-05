import { UserLogWhereInput } from "./UserLogWhereInput";
import { UserLogOrderByInput } from "./UserLogOrderByInput";

export type UserLogFindManyArgs = {
  where?: UserLogWhereInput;
  orderBy?: Array<UserLogOrderByInput>;
  skip?: number;
  take?: number;
};
