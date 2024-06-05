import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdministrateurService } from "./administrateur.service";
import { AdministrateurControllerBase } from "./base/administrateur.controller.base";

@swagger.ApiTags("administrateurs")
@common.Controller("administrateurs")
export class AdministrateurController extends AdministrateurControllerBase {
  constructor(
    protected readonly service: AdministrateurService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
