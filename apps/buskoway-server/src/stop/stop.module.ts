import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StopModuleBase } from "./base/stop.module.base";
import { StopService } from "./stop.service";
import { StopController } from "./stop.controller";
import { StopResolver } from "./stop.resolver";

@Module({
  imports: [StopModuleBase, forwardRef(() => AuthModule)],
  controllers: [StopController],
  providers: [StopService, StopResolver],
  exports: [StopService],
})
export class StopModule {}
