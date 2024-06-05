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
import { TransportCard } from "./TransportCard";
import { TransportCardCountArgs } from "./TransportCardCountArgs";
import { TransportCardFindManyArgs } from "./TransportCardFindManyArgs";
import { TransportCardFindUniqueArgs } from "./TransportCardFindUniqueArgs";
import { DeleteTransportCardArgs } from "./DeleteTransportCardArgs";
import { TransportCardService } from "../transportCard.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransportCard)
export class TransportCardResolverBase {
  constructor(
    protected readonly service: TransportCardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TransportCard",
    action: "read",
    possession: "any",
  })
  async _transportCardsMeta(
    @graphql.Args() args: TransportCardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TransportCard])
  @nestAccessControl.UseRoles({
    resource: "TransportCard",
    action: "read",
    possession: "any",
  })
  async transportCards(
    @graphql.Args() args: TransportCardFindManyArgs
  ): Promise<TransportCard[]> {
    return this.service.transportCards(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TransportCard, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TransportCard",
    action: "read",
    possession: "own",
  })
  async transportCard(
    @graphql.Args() args: TransportCardFindUniqueArgs
  ): Promise<TransportCard | null> {
    const result = await this.service.transportCard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TransportCard)
  @nestAccessControl.UseRoles({
    resource: "TransportCard",
    action: "delete",
    possession: "any",
  })
  async deleteTransportCard(
    @graphql.Args() args: DeleteTransportCardArgs
  ): Promise<TransportCard | null> {
    try {
      return await this.service.deleteTransportCard(args);
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
