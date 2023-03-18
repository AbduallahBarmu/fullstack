import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { Admin } from '../../schemas/admin.schema';
import { CreateAdminDto } from '../../dto/create-admin';
import { AuthService } from '../../../login/auth/services/auth.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService, // private readonly authService: AuthService,
  ) {}

  @Get(':id')
  async getAdmin(@Param('id') id): Promise<Admin> {
    return this.adminService.findAdmin(id);
  }

  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.signup(createAdminDto);
  }
}
