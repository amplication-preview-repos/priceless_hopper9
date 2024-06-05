import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StopService } from "./stop.service";
import { StopControllerBase } from "./base/stop.controller.base";

@swagger.ApiTags("stops")
@common.Controller("stops")
export class StopController extends StopControllerBase {
  constructor(
    protected readonly service: StopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
