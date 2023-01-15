import { Injectable } from '@nestjs/common';


export type Admin = any; 


@Injectable()
export class AdminService {
    private readonly admins = [
        {
            adminId:1, 
            username:'abduallah', 
            password:'12345A'
        },
        {
            adminId:2, 
            username:'taha', 
            password:'12345T'
        },
    ]

    async findOne(username:string):Promise<Admin | undefined>{  
        return this.admins.find(admin => admin.username === username)
    }

}

// import service inside module 