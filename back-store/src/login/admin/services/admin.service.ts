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


  async findAdmin(email: string): Promise<Admin | undefined> {
    const user = await this.adminModel.findOne({ email: email});
    return user;
  }


  
  async signup(admin: Admin) :Promise<any>{
    const {email , password } = admin
    const isExist = await this.findAdmin(email)
    if(isExist){
      return 'admin already exist'
    }
    const newAdmin =  new this.adminModel(admin)
    return await newAdmin.save()
  }
  

  
  ///////////////////////

  //  async findAdmin({email, password}): Promise<Admin | undefined> {
  //     const user = await this.adminModel.findOne({ email , password});
  //     return user;
  //   }

  // async createAdmain(email:string, password:string):Promise<Admin>{
  //   return this.adminModel.create({
  //     email , password
  //   })
  // }

}

// import service inside module
