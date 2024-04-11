import { IsNumber, IsString, ValidateNested, IsNumberString } from "class-validator";
import { Type } from "class-transformer"
import { ReplyParameters } from "./replay_parameters.dto";
export class SendMessageMethodDTO {
  @IsNumberString()
  chat_id: number | string

  @IsString()
  text: string

  @IsString()
  parse_mode: string

  @Type(() => ReplyParameters)
  @ValidateNested()
  reply_parameters: ReplyParameters
}
