/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VehicleMaintenance } from "./VehicleMaintenance";
import { VehicleMaintenanceCountArgs } from "./VehicleMaintenanceCountArgs";
import { VehicleMaintenanceFindManyArgs } from "./VehicleMaintenanceFindManyArgs";
import { VehicleMaintenanceFindUniqueArgs } from "./VehicleMaintenanceFindUniqueArgs";
import { DeleteVehicleMaintenanceArgs } from "./DeleteVehicleMaintenanceArgs";
import { VehicleMaintenanceService } from "../vehicleMaintenance.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VehicleMaintenance)
export class VehicleMaintenanceResolverBase {
  constructor(
    protected readonly service: VehicleMaintenanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "VehicleMaintenance",
    action: "read",
    possession: "any",
  })
  async _vehicleMaintenancesMeta(
    @graphql.Args() args: VehicleMaintenanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [VehicleMaintenance])
  @nestAccessControl.UseRoles({
    resource: "VehicleMaintenance",
    action: "read",
    possession: "any",
  })
  async vehicleMaintenances(
    @graphql.Args() args: VehicleMaintenanceFindManyArgs
  ): Promise<VehicleMaintenance[]> {
    return this.service.vehicleMaintenances(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => VehicleMaintenance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "VehicleMaintenance",
    action: "read",
    possession: "own",
  })
  async vehicleMaintenance(
    @graphql.Args() args: VehicleMaintenanceFindUniqueArgs
  ): Promise<VehicleMaintenance | null> {
    const result = await this.service.vehicleMaintenance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => VehicleMaintenance)
  @nestAccessControl.UseRoles({
    resource: "VehicleMaintenance",
    action: "delete",
    possession: "any",
  })
  async deleteVehicleMaintenance(
    @graphql.Args() args: DeleteVehicleMaintenanceArgs
  ): Promise<VehicleMaintenance | null> {
    try {
      return await this.service.deleteVehicleMaintenance(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
