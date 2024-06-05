import { Chauffeur as TChauffeur } from "../api/chauffeur/Chauffeur";

export const CHAUFFEUR_TITLE_FIELD = "id";

export const ChauffeurTitle = (record: TChauffeur): string => {
  return record.id?.toString() || String(record.id);
};
