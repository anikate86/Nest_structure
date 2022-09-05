import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

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

//   @IsString()
//   @MaxLength(30)
//   @IsNotEmpty()
//   readonly lastOrder: string;
}