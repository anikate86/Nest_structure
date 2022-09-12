import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import * as dotenv from 'dotenv'

@Module({
  imports: [
  ConfigModule.forRoot({ isGlobal: true }),
  ScheduleModule.forRoot(),
  MongooseModule.forRoot(process.env.DATABASE),
  UserModule,
  OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
