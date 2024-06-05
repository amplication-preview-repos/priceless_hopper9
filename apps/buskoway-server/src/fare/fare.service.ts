import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FareServiceBase } from "./base/fare.service.base";

@Injectable()
export class FareService extends FareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
