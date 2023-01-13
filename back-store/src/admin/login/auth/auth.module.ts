import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AdminModule } from '../admin/admin.module';
// by importing admin.module we link admin.service with auth.module 

// configure  Passport features 
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/local.strategy';
import { AuthController } from './controllers/auth.controller';


@Module({
  imports: [AdminModule ,PassportModule],
  providers: [AuthService , LocalStrategy],
  controllers: [AuthController]

})
export class AuthModule {}
