import { IsString, IsNumber, ValidateNested } from "class-validator";
import { Chat } from "./chat.dto"
import { Type } from "class-transformer";

export class Message {
  @IsNumber()
  date: number

  @Type(() => Chat)
  @ValidateNested()
  chat: Chat
}
