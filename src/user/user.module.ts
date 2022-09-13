import { Module,Logger } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from '../models/user';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: user.name, schema: userSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService,Logger]
})
export class UserModule {}
