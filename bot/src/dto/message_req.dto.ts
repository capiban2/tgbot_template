import { IsString, IsNumber, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Message } from "./message.dto";
import { From } from "./from.dto";
export class MessageDto {
  @IsNumber()
  update_id: number

  @Type(() => Message)
  @ValidateNested()
  message: Message

  @IsNumber()
  message_id: number

  @Type(() => From)
  @ValidateNested()
  from: From

  @IsString()
  text: string


}
