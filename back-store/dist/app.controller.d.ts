import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    login(req: any): Promise<any>;
    handleSomething(): {
        msg: string;
    };
}
