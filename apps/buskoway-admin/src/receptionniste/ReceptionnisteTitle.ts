import { Receptionniste as TReceptionniste } from "../api/receptionniste/Receptionniste";

export const RECEPTIONNISTE_TITLE_FIELD = "id";

export const ReceptionnisteTitle = (record: TReceptionniste): string => {
  return record.id?.toString() || String(record.id);
};
