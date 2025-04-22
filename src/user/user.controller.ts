import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

//@Body, @Param, @Res, @Req
@Controller()
@ApiTags('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('user')
  async getUser(
    @Param() params: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.OK);
    return [];
  }
  @Get('users')
  async getUsers(@Res({ passthrough: true }) res: Response) {}
  @UsePipes(new ValidationPipe())
  @Post('addUser')
  async createUser(
    @Body() userData: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const response = await this.userService.createUser(userData);
      res.status(HttpStatus.CREATED);
      return { success: true, error: '', data: response };
    } catch (e) {
      return { success: false, error: e.message, data: '' };
    }
  }
  @Put('updateUser')
  async updateUser(@Body() userData: UpdateUserDto) {}
  @UsePipes(new ValidationPipe())
  @Post('login')
  async loginUser(
    @Body() userData: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const response = await this.userService.loginUser(userData);
      res.status(HttpStatus.OK);
      return { success: true, error: '', data: response };
    } catch (e) {
      return { success: false, error: e.message, data: '' };
    }
  }
}
