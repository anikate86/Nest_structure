import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { order } from '../models/order';
import { createOrderDto } from '../dto/createOrderDto';
import { updateOrderDto } from '../dto/updateOrderDto';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(order.name) private readonly orderModel: Model<order>,
      ) {}
      async createorder(model:createOrderDto): Promise<order> {
          const neworder = await new this.orderModel(model);
          return neworder.save();
      }
    
      async findorderById(orderId: string): Promise<order> {
        const singleorder = await this.orderModel
          .findById({ _id: orderId })
          .exec();
        if (!singleorder) {
          throw new NotFoundException(`Customer #${orderId} not found`);
        }
    
        return singleorder;
      }
    
      async updateorderById(orderId:string,model1: updateOrderDto): Promise<order> {
        const updatedorder = await this.orderModel
          .findByIdAndUpdate(
            { _id: orderId},
            model1
          )
          .exec();
        if (!updatedorder) {
          throw new NotFoundException(`Customer  not found`);
        }
    
        return updatedorder;
      }
    
      async removeorderById(orderId: string): Promise<order> {
        const removedorder = await this.orderModel.findByIdAndRemove({
          _id: orderId,
        });
        return removedorder;
      }
}
