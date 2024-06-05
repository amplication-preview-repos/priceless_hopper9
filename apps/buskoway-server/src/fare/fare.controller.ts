import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FareService } from "./fare.service";
import { FareControllerBase } from "./base/fare.controller.base";

@swagger.ApiTags("fares")
@common.Controller("fares")
export class FareController extends FareControllerBase {
  constructor(
    protected readonly service: FareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
