import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialRecordResolverBase } from "./base/financialRecord.resolver.base";
import { FinancialRecord } from "./base/FinancialRecord";
import { FinancialRecordService } from "./financialRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialRecord)
export class FinancialRecordResolver extends FinancialRecordResolverBase {
  constructor(
    protected readonly service: FinancialRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
