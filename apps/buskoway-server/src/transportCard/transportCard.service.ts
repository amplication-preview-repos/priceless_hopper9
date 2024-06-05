import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransportCardServiceBase } from "./base/transportCard.service.base";

@Injectable()
export class TransportCardService extends TransportCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
