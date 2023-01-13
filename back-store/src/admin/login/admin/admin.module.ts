import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { AdminController } from './controllers/admin.controller';

@Module({
  providers: [AdminService],
  exports:[AdminService],
  controllers: [AdminController]   
})
export class AdminModule {}
