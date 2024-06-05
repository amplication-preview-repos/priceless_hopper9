import { CarteDeTransport as TCarteDeTransport } from "../api/carteDeTransport/CarteDeTransport";

export const CARTEDETRANSPORT_TITLE_FIELD = "id";

export const CarteDeTransportTitle = (record: TCarteDeTransport): string => {
  return record.id?.toString() || String(record.id);
};
