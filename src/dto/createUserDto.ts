import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class createAddressDto{
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  addressLine1: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  addressLine2: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  cityLocality: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  state: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  postalCode: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  country: string;
}
export class createUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly phoneNo: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastOrder: string;

 
  @IsNotEmpty()
  locationEnabled: boolean;

  
  @IsNotEmpty()
  address: createAddressDto[]
}