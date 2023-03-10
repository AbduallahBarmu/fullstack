import { Model } from 'mongoose';
import { Admin } from '../../schemas/admin.schema';
export declare class AdminService {
    private readonly adminModel;
    constructor(adminModel: Model<Admin>);
    findAdmin(email: string): Promise<Admin | undefined>;
    signup(admin: Admin): Promise<any>;
}
