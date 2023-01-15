import { Controller, Post ,Get, Param} from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { Admin } from '../../schemas/admin.schema';
@Controller('admin')
export class AdminController {

    constructor(private readonly adminService:AdminService){}
    @Get(':id')
    async getAdmin(@Param('id') id):Promise<Admin>{
        return this.adminService.findOne(id)
    }

}
