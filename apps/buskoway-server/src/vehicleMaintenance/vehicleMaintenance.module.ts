import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VehicleMaintenanceModuleBase } from "./base/vehicleMaintenance.module.base";
import { VehicleMaintenanceService } from "./vehicleMaintenance.service";
import { VehicleMaintenanceController } from "./vehicleMaintenance.controller";
import { VehicleMaintenanceResolver } from "./vehicleMaintenance.resolver";

@Module({
  imports: [VehicleMaintenanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [VehicleMaintenanceController],
  providers: [VehicleMaintenanceService, VehicleMaintenanceResolver],
  exports: [VehicleMaintenanceService],
})
export class VehicleMaintenanceModule {}
