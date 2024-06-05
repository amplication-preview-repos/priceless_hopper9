import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialRecordService } from "./financialRecord.service";
import { FinancialRecordControllerBase } from "./base/financialRecord.controller.base";

@swagger.ApiTags("financialRecords")
@common.Controller("financialRecords")
export class FinancialRecordController extends FinancialRecordControllerBase {
  constructor(
    protected readonly service: FinancialRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
