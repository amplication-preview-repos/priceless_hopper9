import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChauffeurServiceBase } from "./base/chauffeur.service.base";

@Injectable()
export class ChauffeurService extends ChauffeurServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
