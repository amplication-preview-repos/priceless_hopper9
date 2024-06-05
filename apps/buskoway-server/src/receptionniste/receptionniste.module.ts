import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReceptionnisteModuleBase } from "./base/receptionniste.module.base";
import { ReceptionnisteService } from "./receptionniste.service";
import { ReceptionnisteController } from "./receptionniste.controller";
import { ReceptionnisteResolver } from "./receptionniste.resolver";

@Module({
  imports: [ReceptionnisteModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReceptionnisteController],
  providers: [ReceptionnisteService, ReceptionnisteResolver],
  exports: [ReceptionnisteService],
})
export class ReceptionnisteModule {}
