import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceptionnisteServiceBase } from "./base/receptionniste.service.base";

@Injectable()
export class ReceptionnisteService extends ReceptionnisteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
