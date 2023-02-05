import { AdminService } from '../services/admin.service';
import { Admin } from '../../schemas/admin.schema';
import { CreateAdminDto } from 'src/login/dto/create-admin';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAdmin(id: any): Promise<Admin>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
}
