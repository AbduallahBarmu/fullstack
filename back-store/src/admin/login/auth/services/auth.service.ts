import { Injectable } from '@nestjs/common';
import { AdminService } from '../../admin/services/admin.service';
@Injectable()
export class AuthService {
    constructor(private adminService:AdminService){}


    
// AuthService has the job of retrieving a user and verifying the password by using this method 
    async validaterAdmin(username:string ,pass:string): Promise<any>{
        const admin = await this.adminService.findOne(username); 
        if(admin && admin.passwrord === pass){
            const {passwrord,...result} = admin; 
            return result; 
        }
        return null ; 
    }

}
