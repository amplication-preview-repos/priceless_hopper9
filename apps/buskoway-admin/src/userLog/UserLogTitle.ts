import { UserLog as TUserLog } from "../api/userLog/UserLog";

export const USERLOG_TITLE_FIELD = "id";

export const UserLogTitle = (record: TUserLog): string => {
  return record.id?.toString() || String(record.id);
};
