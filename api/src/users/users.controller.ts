import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateUserDto, FindAllResponse } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller()
@UsePipes(new ValidationPipe({ transform: true }))
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('api/v1/users')
  @ApiResponse({ status: HttpStatus.OK, type: FindAllResponse })
  getAll() {
    return this.service.findAll();
  }

  @Post('api/v1/user')
  create(@Body() createUserDto: CreateUserDto) {
    const { firstName, lastName } = createUserDto;
    return this.service.create(firstName, lastName);
  }
}
