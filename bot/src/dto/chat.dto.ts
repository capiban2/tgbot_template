import { IsString, IsNumber } from "class-validator";

export class Chat {
  @IsString()
  last_name: string

  @IsNumber()
  id: number

  @IsString()
  first_name: string

  @IsString()
  username: string
}
