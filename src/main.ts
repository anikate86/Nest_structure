import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER , utilities as nestWinstonModuleUtilities,
  WinstonModule} from 'nest-winston';
  import * as winston from 'winston'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    }),
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.enableCors();
  app.setGlobalPrefix('server/api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1','1.1'],
  });
  await app.listen(process.env.PORT || 3000);
}

bootstrap();