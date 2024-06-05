import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLogServiceBase } from "./base/userLog.service.base";

@Injectable()
export class UserLogService extends UserLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
