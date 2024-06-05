import { AppUser as TAppUser } from "../api/appUser/AppUser";

export const APPUSER_TITLE_FIELD = "id";

export const AppUserTitle = (record: TAppUser): string => {
  return record.id?.toString() || String(record.id);
};
