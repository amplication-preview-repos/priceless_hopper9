import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserLogService } from "./userLog.service";
import { UserLogControllerBase } from "./base/userLog.controller.base";

@swagger.ApiTags("userLogs")
@common.Controller("userLogs")
export class UserLogController extends UserLogControllerBase {
  constructor(
    protected readonly service: UserLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
