import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CarteDeTransportResolverBase } from "./base/carteDeTransport.resolver.base";
import { CarteDeTransport } from "./base/CarteDeTransport";
import { CarteDeTransportService } from "./carteDeTransport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CarteDeTransport)
export class CarteDeTransportResolver extends CarteDeTransportResolverBase {
  constructor(
    protected readonly service: CarteDeTransportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
