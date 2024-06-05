import { Fare as TFare } from "../api/fare/Fare";

export const FARE_TITLE_FIELD = "id";

export const FareTitle = (record: TFare): string => {
  return record.id?.toString() || String(record.id);
};
