import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarteDeTransportService } from "./carteDeTransport.service";
import { CarteDeTransportControllerBase } from "./base/carteDeTransport.controller.base";

@swagger.ApiTags("carteDeTransports")
@common.Controller("carteDeTransports")
export class CarteDeTransportController extends CarteDeTransportControllerBase {
  constructor(
    protected readonly service: CarteDeTransportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
