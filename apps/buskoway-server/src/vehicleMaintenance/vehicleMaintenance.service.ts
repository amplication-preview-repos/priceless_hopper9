import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleMaintenanceServiceBase } from "./base/vehicleMaintenance.service.base";

@Injectable()
export class VehicleMaintenanceService extends VehicleMaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
