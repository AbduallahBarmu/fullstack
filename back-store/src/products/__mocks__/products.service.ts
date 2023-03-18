import { productsStub } from '../test/stubs/products.stub';

// create auto mock for product service
// we used mockResolvedValue cuz our functions return promise
export const ProductsService = jest.fn().mockReturnValue({
  getProductProfileServ: jest.fn().mockResolvedValue(productsStub()),

  getAllProductsServ: jest.fn().mockResolvedValue([productsStub()]),
  createProduct: jest.fn().mockResolvedValue(productsStub()),
  updateProduct: jest.fn().mockResolvedValue(productsStub()),
  deleteProduct: jest.fn().mockResolvedValue(productsStub()),
});
