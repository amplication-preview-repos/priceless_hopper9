import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransportCardModuleBase } from "./base/transportCard.module.base";
import { TransportCardService } from "./transportCard.service";
import { TransportCardController } from "./transportCard.controller";
import { TransportCardResolver } from "./transportCard.resolver";

@Module({
  imports: [TransportCardModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransportCardController],
  providers: [TransportCardService, TransportCardResolver],
  exports: [TransportCardService],
})
export class TransportCardModule {}
