import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VehicleMaintenanceResolverBase } from "./base/vehicleMaintenance.resolver.base";
import { VehicleMaintenance } from "./base/VehicleMaintenance";
import { VehicleMaintenanceService } from "./vehicleMaintenance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VehicleMaintenance)
export class VehicleMaintenanceResolver extends VehicleMaintenanceResolverBase {
  constructor(
    protected readonly service: VehicleMaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
