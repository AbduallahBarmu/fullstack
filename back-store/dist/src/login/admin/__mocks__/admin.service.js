"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = void 0;
const signIn_signUp_stub_1 = require("../../../../test/stubs/signIn-signUp.stub");
exports.adminService = jest.fn().mockReturnValue({
    getAdmin: jest.fn().mockResolvedValue((0, signIn_signUp_stub_1.AdminStub)()),
    createAdmin: jest.fn().mockResolvedValue([(0, signIn_signUp_stub_1.AdminStub)()]),
});
//# sourceMappingURL=admin.service.js.map