import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChauffeurResolverBase } from "./base/chauffeur.resolver.base";
import { Chauffeur } from "./base/Chauffeur";
import { ChauffeurService } from "./chauffeur.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Chauffeur)
export class ChauffeurResolver extends ChauffeurResolverBase {
  constructor(
    protected readonly service: ChauffeurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
