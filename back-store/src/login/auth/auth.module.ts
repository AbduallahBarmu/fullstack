import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AdminModule } from '../admin/admin.module';
// by importing admin.module we link admin.service with auth.module

// configure  Passport features
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';
// strategies
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
// JWT
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    AdminModule,
    PassportModule,
    JwtModule.register({
      // We configure the JwtModule using register(), passing in a configuration object
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],

  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
