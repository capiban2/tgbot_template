import { IsString, IsNotEmpty, IsNumber } from "class-validator"

export class From {
  @IsString()
  last_name: string

  @IsString()
  type: string

  @IsNumber()
  id: number

  @IsString()
  username: string
}
