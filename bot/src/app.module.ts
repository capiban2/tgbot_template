import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartModule } from './start/start.module';
import { UtilityModule } from './utility/utility.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [StartModule, UtilityModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
