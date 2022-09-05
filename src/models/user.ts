import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class user extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ required:true })
  phoneNo: string;

//   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'order' })
//   lastOrder: string;
}

export const userSchema = SchemaFactory.createForClass(user);