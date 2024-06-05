import { Incident as TIncident } from "../api/incident/Incident";

export const INCIDENT_TITLE_FIELD = "id";

export const IncidentTitle = (record: TIncident): string => {
  return record.id?.toString() || String(record.id);
};
