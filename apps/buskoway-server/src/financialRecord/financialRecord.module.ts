import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialRecordModuleBase } from "./base/financialRecord.module.base";
import { FinancialRecordService } from "./financialRecord.service";
import { FinancialRecordController } from "./financialRecord.controller";
import { FinancialRecordResolver } from "./financialRecord.resolver";

@Module({
  imports: [FinancialRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialRecordController],
  providers: [FinancialRecordService, FinancialRecordResolver],
  exports: [FinancialRecordService],
})
export class FinancialRecordModule {}
