import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChauffeurModuleBase } from "./base/chauffeur.module.base";
import { ChauffeurService } from "./chauffeur.service";
import { ChauffeurController } from "./chauffeur.controller";
import { ChauffeurResolver } from "./chauffeur.resolver";

@Module({
  imports: [ChauffeurModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChauffeurController],
  providers: [ChauffeurService, ChauffeurResolver],
  exports: [ChauffeurService],
})
export class ChauffeurModule {}
