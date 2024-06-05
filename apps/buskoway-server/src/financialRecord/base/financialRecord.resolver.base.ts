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
import { FinancialRecord } from "./FinancialRecord";
import { FinancialRecordCountArgs } from "./FinancialRecordCountArgs";
import { FinancialRecordFindManyArgs } from "./FinancialRecordFindManyArgs";
import { FinancialRecordFindUniqueArgs } from "./FinancialRecordFindUniqueArgs";
import { DeleteFinancialRecordArgs } from "./DeleteFinancialRecordArgs";
import { FinancialRecordService } from "../financialRecord.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialRecord)
export class FinancialRecordResolverBase {
  constructor(
    protected readonly service: FinancialRecordService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FinancialRecord",
    action: "read",
    possession: "any",
  })
  async _financialRecordsMeta(
    @graphql.Args() args: FinancialRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FinancialRecord])
  @nestAccessControl.UseRoles({
    resource: "FinancialRecord",
    action: "read",
    possession: "any",
  })
  async financialRecords(
    @graphql.Args() args: FinancialRecordFindManyArgs
  ): Promise<FinancialRecord[]> {
    return this.service.financialRecords(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FinancialRecord, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FinancialRecord",
    action: "read",
    possession: "own",
  })
  async financialRecord(
    @graphql.Args() args: FinancialRecordFindUniqueArgs
  ): Promise<FinancialRecord | null> {
    const result = await this.service.financialRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FinancialRecord)
  @nestAccessControl.UseRoles({
    resource: "FinancialRecord",
    action: "delete",
    possession: "any",
  })
  async deleteFinancialRecord(
    @graphql.Args() args: DeleteFinancialRecordArgs
  ): Promise<FinancialRecord | null> {
    try {
      return await this.service.deleteFinancialRecord(args);
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
