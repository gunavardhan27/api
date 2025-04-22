import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { relations } from 'src/interfaces';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  relation:string;
}

export class LoginUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  profilePicture: string;
}
