import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/api/v1/login')
  login() {
    return this.adminService.sign();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/api/v1/login/status')
  status() {
    return true;
  }
}
