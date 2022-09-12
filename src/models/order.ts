import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { paymentMethod } from '../enum/payment';


@Schema({ timestamps: true })
export class order extends Document {
  @Prop({required:true})
  orderNumber: string;

  @Prop({required:true})
  deliveryDate: Date;

  @Prop({default: new Date()})
  orderDate: Date;

  @Prop({enum:paymentMethod,default:0})
  paymentMethod: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'payment' })
  paymentId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'store' })
  storeId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product' })
  productId: string;

}

export const orderSchema = SchemaFactory.createForClass(order);