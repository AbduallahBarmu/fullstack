"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const products_stub_1 = require("../../../test/stubs/products.stub");
exports.ProductsService = jest.fn().mockReturnValue({
    getAllProductsServ: jest.fn().mockResolvedValue([(0, products_stub_1.productsStub)()]),
    getProductProfileServ: jest.fn().mockResolvedValue((0, products_stub_1.productsStub)()),
    createProduct: jest.fn().mockResolvedValue((0, products_stub_1.productsStub)()),
    deleteProduct: jest.fn().mockResolvedValue((0, products_stub_1.productsStub)()),
    updateProduct: jest.fn().mockResolvedValue((0, products_stub_1.productsStub)()),
});
//# sourceMappingURL=products.service.js.map