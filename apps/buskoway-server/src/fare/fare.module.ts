import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FareModuleBase } from "./base/fare.module.base";
import { FareService } from "./fare.service";
import { FareController } from "./fare.controller";
import { FareResolver } from "./fare.resolver";

@Module({
  imports: [FareModuleBase, forwardRef(() => AuthModule)],
  controllers: [FareController],
  providers: [FareService, FareResolver],
  exports: [FareService],
})
export class FareModule {}
