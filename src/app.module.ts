import { Module ,Logger} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import * as dotenv from 'dotenv';
import {  utilities as nestWinstonModuleUtilities,WinstonModule } from 'nest-winston';
import * as winston from 'winston';


@Module({
  imports: [
  ConfigModule.forRoot({ isGlobal: true }),
  WinstonModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
    transports: [
      new winston.transports.File({
        filename: `src/logs/combined.txt`,
        level:'info'
      }),
      new winston.transports.File({
        filename: `src/logs/error.txt`,
        level:'error'
      }),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.label({
            label: `info`,
          }),
          winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
          }),
          winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
          nestWinstonModuleUtilities.format.nestLike(),
        ),
      }),
    ],
  }),
  inject: [ConfigService],
    // options
  }),
  ScheduleModule.forRoot(),
  MongooseModule.forRoot(process.env.DATABASE),
  UserModule,
  OrderModule],
  controllers: [AppController],
  providers: [AppService,Logger],
})
export class AppModule {}
