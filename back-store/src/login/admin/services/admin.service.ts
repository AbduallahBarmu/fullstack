import { Injectable } from '@nestjs/common';
// DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Admin } from '../../schemas/admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
  ) {}

  async findAdmin(email: string): Promise<Admin> {
    const user = await this.adminModel.findOne({ email: email});
    return user;
  }
}

// import service inside module
