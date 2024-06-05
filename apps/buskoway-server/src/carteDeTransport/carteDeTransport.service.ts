import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarteDeTransportServiceBase } from "./base/carteDeTransport.service.base";

@Injectable()
export class CarteDeTransportService extends CarteDeTransportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
