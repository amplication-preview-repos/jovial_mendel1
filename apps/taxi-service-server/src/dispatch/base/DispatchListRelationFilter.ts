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
import { DispatchWhereInput } from "./DispatchWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DispatchListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DispatchWhereInput,
  })
  @ValidateNested()
  @Type(() => DispatchWhereInput)
  @IsOptional()
  @Field(() => DispatchWhereInput, {
    nullable: true,
  })
  every?: DispatchWhereInput;

  @ApiProperty({
    required: false,
    type: () => DispatchWhereInput,
  })
  @ValidateNested()
  @Type(() => DispatchWhereInput)
  @IsOptional()
  @Field(() => DispatchWhereInput, {
    nullable: true,
  })
  some?: DispatchWhereInput;

  @ApiProperty({
    required: false,
    type: () => DispatchWhereInput,
  })
  @ValidateNested()
  @Type(() => DispatchWhereInput)
  @IsOptional()
  @Field(() => DispatchWhereInput, {
    nullable: true,
  })
  none?: DispatchWhereInput;
}
export { DispatchListRelationFilter as DispatchListRelationFilter };
