/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChauffeurWhereInput } from "./ChauffeurWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChauffeurListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChauffeurWhereInput,
  })
  @ValidateNested()
  @Type(() => ChauffeurWhereInput)
  @IsOptional()
  @Field(() => ChauffeurWhereInput, {
    nullable: true,
  })
  every?: ChauffeurWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChauffeurWhereInput,
  })
  @ValidateNested()
  @Type(() => ChauffeurWhereInput)
  @IsOptional()
  @Field(() => ChauffeurWhereInput, {
    nullable: true,
  })
  some?: ChauffeurWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChauffeurWhereInput,
  })
  @ValidateNested()
  @Type(() => ChauffeurWhereInput)
  @IsOptional()
  @Field(() => ChauffeurWhereInput, {
    nullable: true,
  })
  none?: ChauffeurWhereInput;
}
export { ChauffeurListRelationFilter as ChauffeurListRelationFilter };