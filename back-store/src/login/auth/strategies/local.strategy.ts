import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email'});

  }

  async validate(email: string ,password: string): Promise<any> {
    const admin = await this.authService.validaterAdmin(email,password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }

  /*
    We've also implemented the validate() method. 
    For each strategy, Passport will call the verify function (implemented with the validate() method
  */

  // we need to import this strategy in the auth moduel 
}
