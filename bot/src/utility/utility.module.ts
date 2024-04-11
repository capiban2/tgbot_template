import { Module } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { FetchModule } from 'nestjs-fetch';
@Module({
  exports: [UtilityService],
  providers: [UtilityService],
  imports: [ConfigurationModule, FetchModule]
})
export class UtilityModule { }
