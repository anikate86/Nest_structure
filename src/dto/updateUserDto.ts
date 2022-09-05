import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './createUserDto';

export class updateUserDto extends PartialType(createUserDto) {}