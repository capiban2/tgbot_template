
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';


@Module({
    imports: [ConfigModule.forRoot({
        ignoreEnvFile: true,
        load: [config],
        isGlobal: true,
    })],
    exports: [ConfigModule],

})
export class ConfigurationModule {}
