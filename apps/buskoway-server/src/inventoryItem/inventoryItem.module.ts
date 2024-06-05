import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InventoryItemModuleBase } from "./base/inventoryItem.module.base";
import { InventoryItemService } from "./inventoryItem.service";
import { InventoryItemController } from "./inventoryItem.controller";
import { InventoryItemResolver } from "./inventoryItem.resolver";

@Module({
  imports: [InventoryItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [InventoryItemController],
  providers: [InventoryItemService, InventoryItemResolver],
  exports: [InventoryItemService],
})
export class InventoryItemModule {}
