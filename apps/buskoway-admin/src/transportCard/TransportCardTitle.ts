import { TransportCard as TTransportCard } from "../api/transportCard/TransportCard";

export const TRANSPORTCARD_TITLE_FIELD = "id";

export const TransportCardTitle = (record: TTransportCard): string => {
  return record.id?.toString() || String(record.id);
};
