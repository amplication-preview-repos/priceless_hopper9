import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IncidentModuleBase } from "./base/incident.module.base";
import { IncidentService } from "./incident.service";
import { IncidentController } from "./incident.controller";
import { IncidentResolver } from "./incident.resolver";

@Module({
  imports: [IncidentModuleBase, forwardRef(() => AuthModule)],
  controllers: [IncidentController],
  providers: [IncidentService, IncidentResolver],
  exports: [IncidentService],
})
export class IncidentModule {}
