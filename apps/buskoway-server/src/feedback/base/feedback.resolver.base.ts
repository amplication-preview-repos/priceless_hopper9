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
import { Feedback } from "./Feedback";
import { FeedbackCountArgs } from "./FeedbackCountArgs";
import { FeedbackFindManyArgs } from "./FeedbackFindManyArgs";
import { FeedbackFindUniqueArgs } from "./FeedbackFindUniqueArgs";
import { DeleteFeedbackArgs } from "./DeleteFeedbackArgs";
import { FeedbackService } from "../feedback.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Feedback)
export class FeedbackResolverBase {
  constructor(
    protected readonly service: FeedbackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async _feedbacksMeta(
    @graphql.Args() args: FeedbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Feedback])
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async feedbacks(
    @graphql.Args() args: FeedbackFindManyArgs
  ): Promise<Feedback[]> {
    return this.service.feedbacks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Feedback, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "own",
  })
  async feedback(
    @graphql.Args() args: FeedbackFindUniqueArgs
  ): Promise<Feedback | null> {
    const result = await this.service.feedback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Feedback)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "delete",
    possession: "any",
  })
  async deleteFeedback(
    @graphql.Args() args: DeleteFeedbackArgs
  ): Promise<Feedback | null> {
    try {
      return await this.service.deleteFeedback(args);
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