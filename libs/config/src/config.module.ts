import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule as NConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    NConfigModule.forRoot({
      envFilePath: [join(__dirname, '.env')],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
