import { IsString, IsNumber } from "class-validator";

export class ForwardFrom {
  @IsString()
  last_name: string

  @IsNumber()
  id: number

  @IsString()
  first_name: string
}
