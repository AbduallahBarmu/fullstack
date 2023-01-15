import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin/services/admin.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private adminService:AdminService,  private jwtService: JwtService){}


    
// AuthService has the job of retrieving a user and verifying the password by using this method 
    async validaterAdmin(username:string ,pass:string): Promise<any>{
        const admin = await this.adminService.findOne(username); 
        if(admin && admin.password === pass){
            const {password,...result} = admin; 
            return result; 
        }
        return null ; 
    }

    // handle generating JWT by create this login() function also by importing jwtService 
    async login(admin:any){
        const payload = {username:admin.username , sub:admin.adminId}
        return{ // sign() function generate our JWT from a subset of the admin object properties
            access_token: this.jwtService.sign(payload) 
        }
    };

    

}
