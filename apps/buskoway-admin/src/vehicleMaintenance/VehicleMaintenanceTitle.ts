import { VehicleMaintenance as TVehicleMaintenance } from "../api/vehicleMaintenance/VehicleMaintenance";

export const VEHICLEMAINTENANCE_TITLE_FIELD = "id";

export const VehicleMaintenanceTitle = (
  record: TVehicleMaintenance
): string => {
  return record.id?.toString() || String(record.id);
};
