import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialRecordServiceBase } from "./base/financialRecord.service.base";

@Injectable()
export class FinancialRecordService extends FinancialRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
