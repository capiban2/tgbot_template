import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SendMessageMethodDTO } from 'src/dto/send_message_method.dto';
import { FetchModuleOptions } from 'nestjs-fetch';
import { FetchService } from 'nestjs-fetch';

@Injectable()
export class UtilityService {
  constructor(private readonly configService: ConfigService,
    private readonly fetch: FetchService) {

  }
  private base_url = `https://api.telegram.org/bot${this.configService.get<string>('telegram.bot_id')}/sendMessage`;


  async sendMessage(dto: SendMessageMethodDTO) {

    let options: FetchModuleOptions = {
      body: JSON.stringify(dto),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await this.fetch.post(this.base_url, options);
    console.log(response);
    return;

  }
}
