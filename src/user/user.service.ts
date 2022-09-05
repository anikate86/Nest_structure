import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { user } from '../models/user';
import { createUserDto } from '../dto/createUserDto';
import { updateUserDto } from '../dto/updateUserDto';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(user.name) private readonly userModel: Model<user>,
      ) {}
      async createuser(model:createUserDto): Promise<user> {
          const newuser = await new this.userModel(model);
          return newuser.save();
      }
    
      async finduserById(userId: string): Promise<user> {
        const singleuser = await this.userModel
          .findById({ _id: userId })
          .exec();
        if (!singleuser) {
          throw new NotFoundException(`Customer #${userId} not found`);
        }
    
        return singleuser;
      }
    
      async updateuserById(userId:string,model1: updateUserDto): Promise<user> {
        const updateduser = await this.userModel
          .findByIdAndUpdate(
            { _id: userId},
            model1
          )
          .exec();
        if (!updateduser) {
          throw new NotFoundException(`Customer  not found`);
        }
    
        return updateduser;
      }
    
      async removeuserById(userId: string): Promise<user> {
        const removeduser = await this.userModel.findByIdAndRemove({
          _id: userId,
        });
        return removeduser;
      }
}
