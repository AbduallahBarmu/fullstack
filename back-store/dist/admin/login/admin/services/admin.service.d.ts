export type Admin = any;
export declare class AdminService {
    private readonly admins;
    findOne(username: string): Promise<Admin | undefined>;
}
