import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VehicleMaintenanceService } from "./vehicleMaintenance.service";
import { VehicleMaintenanceControllerBase } from "./base/vehicleMaintenance.controller.base";

@swagger.ApiTags("vehicleMaintenances")
@common.Controller("vehicleMaintenances")
export class VehicleMaintenanceController extends VehicleMaintenanceControllerBase {
  constructor(
    protected readonly service: VehicleMaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
