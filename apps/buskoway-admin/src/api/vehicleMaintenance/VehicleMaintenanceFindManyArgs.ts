import { VehicleMaintenanceWhereInput } from "./VehicleMaintenanceWhereInput";
import { VehicleMaintenanceOrderByInput } from "./VehicleMaintenanceOrderByInput";

export type VehicleMaintenanceFindManyArgs = {
  where?: VehicleMaintenanceWhereInput;
  orderBy?: Array<VehicleMaintenanceOrderByInput>;
  skip?: number;
  take?: number;
};
