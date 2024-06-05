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
import { FareWhereUniqueInput } from "./FareWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteFareArgs {
  @ApiProperty({
    required: true,
    type: () => FareWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FareWhereUniqueInput)
  @Field(() => FareWhereUniqueInput, { nullable: false })
  where!: FareWhereUniqueInput;
}

export { DeleteFareArgs as DeleteFareArgs };
