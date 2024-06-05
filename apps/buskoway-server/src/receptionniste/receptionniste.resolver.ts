import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReceptionnisteResolverBase } from "./base/receptionniste.resolver.base";
import { Receptionniste } from "./base/Receptionniste";
import { ReceptionnisteService } from "./receptionniste.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Receptionniste)
export class ReceptionnisteResolver extends ReceptionnisteResolverBase {
  constructor(
    protected readonly service: ReceptionnisteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
