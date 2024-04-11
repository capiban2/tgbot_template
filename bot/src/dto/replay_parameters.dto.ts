import { IsString, IsNumber, IsNumberString } from "class-validator";

export class ReplyParameters {
  @IsNumber()
  message_id: number

  @IsNumberString()
  chat_id: number | string
}
