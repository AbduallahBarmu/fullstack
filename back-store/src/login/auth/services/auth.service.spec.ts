import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { Admin } from '../../schemas/admin.schema';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authservice: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authservice = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authservice).toBeDefined();
  });
});
