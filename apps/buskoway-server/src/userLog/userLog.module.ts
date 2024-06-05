import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserLogModuleBase } from "./base/userLog.module.base";
import { UserLogService } from "./userLog.service";
import { UserLogController } from "./userLog.controller";
import { UserLogResolver } from "./userLog.resolver";

@Module({
  imports: [UserLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserLogController],
  providers: [UserLogService, UserLogResolver],
  exports: [UserLogService],
})
export class UserLogModule {}
