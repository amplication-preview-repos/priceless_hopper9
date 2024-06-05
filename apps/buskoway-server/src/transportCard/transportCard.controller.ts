import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransportCardService } from "./transportCard.service";
import { TransportCardControllerBase } from "./base/transportCard.controller.base";

@swagger.ApiTags("transportCards")
@common.Controller("transportCards")
export class TransportCardController extends TransportCardControllerBase {
  constructor(
    protected readonly service: TransportCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
