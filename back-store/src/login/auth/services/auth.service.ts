import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin/services/admin.service';
import { JwtService } from '@nestjs/jwt';

// DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from '../../schemas/admin.schema';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  // AuthService has the job of retrieving a user and verifying the password by using this method
  async validaterAdmin(email: string, pass: string): Promise<any> {
    const admin = await this.adminService.findAdmin(email);
    if (admin && admin.password === pass) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  // handle generating JWT by create this login() function also by importing jwtService
  async login(admin: any) {
    const payload = { email: admin.email, sub: admin.adminId };
    return {
      // sign() function generate our JWT from a subset of the admin object properties
      access_token: this.jwtService.sign(payload),
    };
  }
}
