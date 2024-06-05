/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserLogWhereInput } from "./UserLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserLogOrderByInput } from "./UserLogOrderByInput";

@ArgsType()
class UserLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserLogWhereInput, { nullable: true })
  @Type(() => UserLogWhereInput)
  where?: UserLogWhereInput;

  @ApiProperty({
    required: false,
    type: [UserLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserLogOrderByInput], { nullable: true })
  @Type(() => UserLogOrderByInput)
  orderBy?: Array<UserLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserLogFindManyArgs as UserLogFindManyArgs };
