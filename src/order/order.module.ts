import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { order, orderSchema } from '../models/order';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: order.name, schema: orderSchema},
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
