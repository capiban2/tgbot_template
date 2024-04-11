import { IsString, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { From } from "./from.dto";


class CallbackQuery {
  @IsString()
  id: string

  @Type(() => From)
  @ValidateNested()
  from: From

  @IsString()
  data: string

  @IsString()
  inline_message_id: string
}

export class CallbackDTO {
  @IsNumber()
  @IsNotEmpty()
  update_id: number

  @Type(() => CallbackQuery)
  @ValidateNested()
  callback_query: CallbackQuery
}
