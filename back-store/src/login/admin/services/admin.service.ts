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


  async signup(admin: Admin) :Promise<Admin>{
    // const reqBody = {
    //   email: admin.email,
    //   password: admin.password,
    // };
    const newAdmin =  new this.adminModel(admin)
    return await newAdmin.save()
  }

}

// import service inside module
