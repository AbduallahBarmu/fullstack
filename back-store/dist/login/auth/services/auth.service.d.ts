import { AdminService } from '../../admin/services/admin.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private adminService;
    private jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    validaterAdmin(email: string, pass: string): Promise<any>;
    login(admin: any): Promise<{
        access_token: string;
    }>;
}
