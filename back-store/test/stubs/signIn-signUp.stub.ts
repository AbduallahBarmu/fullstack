import { Admin } from 'src/login/schemas/admin.schema';

export const AdminStub = (): Admin => {
  return {
    id: '121212',
    email: 'test@mail.com',
    password: '1234567',
  };
};
