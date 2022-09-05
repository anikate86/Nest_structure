import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Post,
    Body,
    Put,
    NotFoundException,
    Delete,
    Param,
    Query,
    UseGuards,
  } from '@nestjs/common';
import { createUserDto } from '../dto/createUserDto';
import { updateUserDto } from '../dto/updateUserDto';
import { UserService } from './user.service';


@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {}
    @Post()
    public async addsupport(@Res() res, @Body() model: createUserDto) {
      try {
        const user = await this.userService.createuser(model);
        return res.status(HttpStatus.OK).json({
          message: 'user has been created successfully',
          user,
        });
      } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Error: user not created!',
          status: 400,
        });
      }
    }
  
    @Get('/:id')
    public async getsupport(@Res() res, @Param('id') userId: string) {
      const singlesupport = await this.userService.finduserById(
        userId,
      );
      if (!singlesupport) {
        throw new NotFoundException('user does not exist!');
      }
      return res.status(HttpStatus.OK).json(singlesupport);
    }
  
    @Delete('/:id')
    public async deletesupport(@Res() res, @Param('id') supportId: string) {
      if (!supportId) {
        throw new NotFoundException('user does not exist');
      }
  
      const removeduser = await this.userService.removeuserById(
        supportId,
      );
  
      if (!removeduser) {
        throw new NotFoundException('user does not exist');
      }
  
      return res.status(HttpStatus.OK).json({
        message: 'user has been deleted',
        removeduser,
      });
    }
    @Put('/:id')
    public async updatesupport(@Res() res, @Param('id') userId: string, @Body() model1: updateUserDto) {
      try {
        const updatedsupport = await this.userService.updateuserById(
            userId,
            model1
        );
        if (!updatedsupport) {
          throw new NotFoundException('user does not exist!');
        }
        return res.status(HttpStatus.OK).json({
          message: 'user has been successfully updated',
          updatedsupport,
        });
      } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Error: user not updated!',
          status: 400,
        });
      }
    }
}
