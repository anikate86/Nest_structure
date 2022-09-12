import { PartialType } from '@nestjs/mapped-types';
import { createOrderDto } from './createOrderDto';

export class updateOrderDto extends PartialType(createOrderDto) {}