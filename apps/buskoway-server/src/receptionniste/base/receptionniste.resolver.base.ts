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
import { Receptionniste } from "./Receptionniste";
import { ReceptionnisteCountArgs } from "./ReceptionnisteCountArgs";
import { ReceptionnisteFindManyArgs } from "./ReceptionnisteFindManyArgs";
import { ReceptionnisteFindUniqueArgs } from "./ReceptionnisteFindUniqueArgs";
import { DeleteReceptionnisteArgs } from "./DeleteReceptionnisteArgs";
import { ReceptionnisteService } from "../receptionniste.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Receptionniste)
export class ReceptionnisteResolverBase {
  constructor(
    protected readonly service: ReceptionnisteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Receptionniste",
    action: "read",
    possession: "any",
  })
  async _receptionnistesMeta(
    @graphql.Args() args: ReceptionnisteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Receptionniste])
  @nestAccessControl.UseRoles({
    resource: "Receptionniste",
    action: "read",
    possession: "any",
  })
  async receptionnistes(
    @graphql.Args() args: ReceptionnisteFindManyArgs
  ): Promise<Receptionniste[]> {
    return this.service.receptionnistes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Receptionniste, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Receptionniste",
    action: "read",
    possession: "own",
  })
  async receptionniste(
    @graphql.Args() args: ReceptionnisteFindUniqueArgs
  ): Promise<Receptionniste | null> {
    const result = await this.service.receptionniste(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Receptionniste)
  @nestAccessControl.UseRoles({
    resource: "Receptionniste",
    action: "delete",
    possession: "any",
  })
  async deleteReceptionniste(
    @graphql.Args() args: DeleteReceptionnisteArgs
  ): Promise<Receptionniste | null> {
    try {
      return await this.service.deleteReceptionniste(args);
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
