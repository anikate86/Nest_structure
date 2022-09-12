import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class createOrderDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    orderNumber: string;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    deliveryDate: Date;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    orderDate: Date;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    paymentMethod: string;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    paymentId: string;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    storeId: string;
  
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    productId: string;
  
}