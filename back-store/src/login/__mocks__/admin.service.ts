import { AdminStub } from '../test/stubs/signIn-signUp.stub';

// create auto mock for admin service
// we used mockResolvedValue cuz our functions return promise
export const adminService = jest.fn().mockReturnValue({
  getAdmin: jest.fn().mockResolvedValue(AdminStub()),
  createAdmin: jest.fn().mockResolvedValue([AdminStub()]),
});
