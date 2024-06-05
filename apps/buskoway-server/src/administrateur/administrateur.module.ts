import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdministrateurModuleBase } from "./base/administrateur.module.base";
import { AdministrateurService } from "./administrateur.service";
import { AdministrateurController } from "./administrateur.controller";
import { AdministrateurResolver } from "./administrateur.resolver";

@Module({
  imports: [AdministrateurModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdministrateurController],
  providers: [AdministrateurService, AdministrateurResolver],
  exports: [AdministrateurService],
})
export class AdministrateurModule {}
