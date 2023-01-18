"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./login/auth/auth.module");
const admin_module_1 = require("./login/admin/admin.module");
const products_module_1 = require("./products/products.module");
const keys_1 = require("./config/keys");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_module_1 = require("@nestjs/serve-static/dist/serve-static.module");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [products_module_1.ProductsModule, auth_module_1.AuthModule, admin_module_1.AdminModule, mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI),
            serve_static_module_1.ServeStaticModule.forRoot({ rootPath: (0, path_1.join)(__dirname, '..', 'public') })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map