import { Inject, Injectable, forwardRef } from '@nestjs/common';
// DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Admin } from '../../schemas/admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<Admin>,
  ) {}

  async findAdmin(email: string): Promise<Admin | undefined> {
    const user = await this.adminModel.findOne({ email: email });
    return user;
  }

  async signup(admin: Admin): Promise<any> {
    const { email, password } = admin;

    // check if Admin exist or not
    const isExist = await this.findAdmin(email);
    if (isExist) return 'Admin Already Exist'; // if yes do not create new admin
    const newAdmin = new this.adminModel(admin); // else create new one
    return await newAdmin.save();
  }
}

// import service inside module
