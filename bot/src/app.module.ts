import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartModule } from './start/start.module';

@Module({
  imports: [StartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
