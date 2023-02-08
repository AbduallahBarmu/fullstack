import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from '../services/admin.service';
import { Admin } from 'src/login/schemas/admin.schema';
import { CreateAdminDto } from 'src/login/dto/create-admin';
import { async } from 'rxjs';
import { AdminStub } from 'test/stubs/signIn-signUp.stub';
import { Controller } from '@nestjs/common';

jest.mock('../__mocks__/admin.service');

describe('AdminController', () => {
  let adminController: AdminController;
  let adminService: AdminService;
  let admin: Admin;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AdminController],
      providers: [],
    }).compile();

    adminController = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
    expect(adminController).toBeDefined();
  });

  /*
   case 1: 
     - make sure that we are calling findAdmin  by ID in the adminService
     - expect that we return an admin
  */

  describe('signIn', () => {
    // let admin: Admin;

    jest.clearAllMocks();
    beforeEach(async () => {
      admin = await adminController.getAdmin(AdminStub().id);
    });

    test('then it should call adminService', () => {
      expect(adminService.findAdmin).toBeCalledWith(AdminStub().id);
    });

    test('then it should signIn and return admin', () => {
      expect(admin).toEqual(AdminStub());
    });
  });

  /*
   case 2: 
     - make sure that we are calling createAdmin in the adminService
     - expect that we create a new admin 
  */

  describe('signUp', () => {
    jest.clearAllMocks();
    let createAdminDto: CreateAdminDto;

    beforeEach(async () => {
      createAdminDto = {
        id: AdminStub().id,
        email: AdminStub().email,
        password: AdminStub().password,
      };

      admin = await adminController.createAdmin(createAdminDto);
    });

    test('then it shuold call signUp service', () => {
      expect(adminService.signup).toHaveBeenCalledWith(
        createAdminDto.email,
        createAdminDto.password,
      );

      test('then it shuold return a new admin', () => {
        expect(admin).toEqual(AdminStub());
      });
    });
  });
});
