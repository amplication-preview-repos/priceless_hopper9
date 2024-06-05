import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdministrateurResolverBase } from "./base/administrateur.resolver.base";
import { Administrateur } from "./base/Administrateur";
import { AdministrateurService } from "./administrateur.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Administrateur)
export class AdministrateurResolver extends AdministrateurResolverBase {
  constructor(
    protected readonly service: AdministrateurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
