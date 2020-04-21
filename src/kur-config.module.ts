import { Module, Global } from '@nestjs/common';
import { ConfigService } from './kur-config.service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `${process.env.NODE_ENV || 'production'}.env`,
      ),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
