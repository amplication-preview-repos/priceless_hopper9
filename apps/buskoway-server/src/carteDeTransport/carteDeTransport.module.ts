import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarteDeTransportModuleBase } from "./base/carteDeTransport.module.base";
import { CarteDeTransportService } from "./carteDeTransport.service";
import { CarteDeTransportController } from "./carteDeTransport.controller";
import { CarteDeTransportResolver } from "./carteDeTransport.resolver";

@Module({
  imports: [CarteDeTransportModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarteDeTransportController],
  providers: [CarteDeTransportService, CarteDeTransportResolver],
  exports: [CarteDeTransportService],
})
export class CarteDeTransportModule {}
