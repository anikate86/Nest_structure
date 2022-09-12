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
import { createOrderDto } from '../dto/createOrderDto';
import { updateOrderDto } from '../dto/updateOrderDto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    @Post()
    public async addsupport(@Res() res, @Body() model: createOrderDto) {
      try {
        const order = await this.orderService.createorder(model);
        return res.status(HttpStatus.OK).json({
          message: 'order has been placed',
          order,
        });
      } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Error: order not placed!',
          status: 400,
        });
      }
    }
  
    @Get('/:id')
    public async getsupport(@Res() res, @Param('id') orderId: string) {
      const singlesupport = await this.orderService.findorderById(
        orderId,
      );
      if (!singlesupport) {
        throw new NotFoundException('order does not exist!');
      }
      return res.status(HttpStatus.OK).json(singlesupport);
    }
  
    @Delete('/:id')
    public async deletesupport(@Res() res, @Param('id') supportId: string) {
      if (!supportId) {
        throw new NotFoundException('order does not exist');
      }
  
      const removedorder = await this.orderService.removeorderById(
        supportId,
      );
  
      if (!removedorder) {
        throw new NotFoundException('order does not exist');
      }
  
      return res.status(HttpStatus.OK).json({
        message: 'order has been deleted',
        removedorder,
      });
    }
    @Put('/:id')
    public async updatesupport(@Res() res, @Param('id') orderId: string, @Body() model1: updateOrderDto) {
      try {
        const updatedsupport = await this.orderService.updateorderById(
            orderId,
            model1
        );
        if (!updatedsupport) {
          throw new NotFoundException('order does not exist!');
        }
        return res.status(HttpStatus.OK).json({
          message: 'order has been successfully updated',
          updatedsupport,
        });
      } catch (err) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Error: order not updated!',
          status: 400,
        });
      }
    }
}
