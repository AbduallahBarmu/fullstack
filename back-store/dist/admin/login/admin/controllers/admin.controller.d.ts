import { AdminService } from '../services/admin.service';
import { Admin } from '../../../schemas/admin.schema';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAdmin(id: any): Promise<Admin>;
}
