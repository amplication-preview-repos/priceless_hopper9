import { Administrateur as TAdministrateur } from "../api/administrateur/Administrateur";

export const ADMINISTRATEUR_TITLE_FIELD = "id";

export const AdministrateurTitle = (record: TAdministrateur): string => {
  return record.id?.toString() || String(record.id);
};
