import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdministrateurServiceBase } from "./base/administrateur.service.base";

@Injectable()
export class AdministrateurService extends AdministrateurServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
