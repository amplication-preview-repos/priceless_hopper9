import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "id";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.id?.toString() || String(record.id);
};
