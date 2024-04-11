import { Module } from '@nestjs/common';
import { StartService } from './start.service';
import { StartController } from './start.controller';

@Module({
  controllers: [StartController],
  providers: [StartService],
})
export class StartModule {}
