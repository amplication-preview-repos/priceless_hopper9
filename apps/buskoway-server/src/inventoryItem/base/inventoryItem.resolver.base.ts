/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InventoryItem } from "./InventoryItem";
import { InventoryItemCountArgs } from "./InventoryItemCountArgs";
import { InventoryItemFindManyArgs } from "./InventoryItemFindManyArgs";
import { InventoryItemFindUniqueArgs } from "./InventoryItemFindUniqueArgs";
import { DeleteInventoryItemArgs } from "./DeleteInventoryItemArgs";
import { InventoryItemService } from "../inventoryItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InventoryItem)
export class InventoryItemResolverBase {
  constructor(
    protected readonly service: InventoryItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async _inventoryItemsMeta(
    @graphql.Args() args: InventoryItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InventoryItem])
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async inventoryItems(
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    return this.service.inventoryItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InventoryItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "own",
  })
  async inventoryItem(
    @graphql.Args() args: InventoryItemFindUniqueArgs
  ): Promise<InventoryItem | null> {
    const result = await this.service.inventoryItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => InventoryItem)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "delete",
    possession: "any",
  })
  async deleteInventoryItem(
    @graphql.Args() args: DeleteInventoryItemArgs
  ): Promise<InventoryItem | null> {
    try {
      return await this.service.deleteInventoryItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
