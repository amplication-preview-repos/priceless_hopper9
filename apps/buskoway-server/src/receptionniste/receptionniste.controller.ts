import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReceptionnisteService } from "./receptionniste.service";
import { ReceptionnisteControllerBase } from "./base/receptionniste.controller.base";

@swagger.ApiTags("receptionnistes")
@common.Controller("receptionnistes")
export class ReceptionnisteController extends ReceptionnisteControllerBase {
  constructor(
    protected readonly service: ReceptionnisteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
