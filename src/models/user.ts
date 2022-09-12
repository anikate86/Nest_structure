import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class address {
  @Prop({required:true})
  addressLine1: string;

  @Prop({required:true})
  addressLine2: string;

  @Prop()
  cityLocality: string;

  @Prop()
  state: string;

  @Prop({required:true})
  postalCode: string;

  @Prop()
  country: string;
}

@Schema({ timestamps: true })
export class user extends Document {
  @Prop({required:true})
  firstName: string;

  @Prop({required:true})
  lastName: string;

  @Prop({ required:true })
  phoneNo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order' })
  lastOrder: string;

  @Prop()
  locationEnabled: boolean;

  @Prop()
  address: address[]
}

export const userSchema = SchemaFactory.createForClass(user);