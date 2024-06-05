import { Stop as TStop } from "../api/stop/Stop";

export const STOP_TITLE_FIELD = "id";

export const StopTitle = (record: TStop): string => {
  return record.id?.toString() || String(record.id);
};
