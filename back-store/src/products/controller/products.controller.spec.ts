import { Test } from '@nestjs/testing';
import { Product } from '../schemas/products.schema';

import { ProductsController } from '../controller/products.controller';
import { ProductsService } from '../services/products.service';
import { productsStub } from 'test/stubs/products.stub';

jest.mock('../__mocks__/products.service');
describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
    jest.clearAllMocks();
  });

  // it('should be defined', () => {
  //   expect(productsController).toBeDefined();
  // });
});

/*
 case 1: 
   - make sure thate we are calling product by Id on the product service with product Id thet I have passed in 
   - expect that we return a product
*/
describe('getProductsById', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  describe('when get products is called', () => {
    let product: Product;
    jest.clearAllMocks();

    beforeEach(async () => {
      product = await productsController.getProductDetails(productsStub().id);
    });

    test('then it shuold call productsService', () => {
      expect(productsService.getProductProfileServ).toBeCalledWith(
        productsStub().id,
      );

      test('then should return a product', () => {
        expect(product).toEqual(productsStub());
      });
    });
  });
});

/*
 case 2: 
   - make sure thate we are calling product by Id on the product service with product Id thet I have passed in 
   - expect that we return a product
*/

describe('getAllProducts', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  describe('when get all products called', () => {
    let product: Product[];

    beforeEach(async () => {
      product = await productsController.getAllProducts();
    });

    test('then it shuold call  productsService', () => {
      expect(productsService.getAllProductsServ).toHaveBeenCalled();
    });
  });
});
