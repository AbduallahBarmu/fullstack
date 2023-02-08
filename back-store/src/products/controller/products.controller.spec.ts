import { Test } from '@nestjs/testing';
import { Product } from '../schemas/products.schema';

import { ProductsController } from '../controller/products.controller';
import { ProductsService } from '../services/products.service';
import { productsStub } from 'test/stubs/products.stub';
import { CreateProdcutsDto } from '../dto/create-products';

jest.mock('../__mocks__/products.service');

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  let product: Product;
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

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  /*
   case 1: 
     - make sure thate we are calling product by Id on the product service with product Id thet I have passed in 
     - expect that we return a product
  */

  describe('getProductsById', () => {
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

  /*
   case 2: 
     - make sure thate we are calling All product on the product service 
     - expect that we return a products
  */

  describe('getAllProducts', () => {
    let product: Product[];

    beforeEach(async () => {
      product = await productsController.getAllProducts();
    });

    test('then it shuold call  productsService', () => {
      expect(productsService.getAllProductsServ).toHaveBeenCalled();
    });
    test('then it should return all products', () => {
      expect(product).toEqual([productsStub()]);
    });
  });

  /*
   case 3: 
     - make sure thate we are calling  createProduct  on the  createProduct service 
     - expect that we return a create a product
  */

  describe('createProduct', () => {
    let createProdcutsDto: CreateProdcutsDto;

    beforeEach(async () => {
      createProdcutsDto = {
        // id: productsStub().id
        // name: productsStub().name,
        // region: productsStub().region,
        // description: productsStub().description,
        // price: productsStub().price,
        // image: productsStub().image,
        id: '11223344',
        name: 'hola',
        region: 'region',
        description: 'des',
        price: 200,
        image: 'img',
      };

      product = await productsController.createProduct(createProdcutsDto);
    });

    test('then it shuold call createProduct service ', () => {
      expect(productsService.createProduct).toHaveBeenCalledWith(
        createProdcutsDto.name,
        createProdcutsDto.region,
      );
    });

    test('then it should return a product', () => {
      expect(product).toEqual(productsStub());
    });
  });

  /*
   case 4: 
     - make sure thate we are calling  updateProduct  on the  updateProduct service 
     - expect that we return a updated product
  */

  describe('updateProduct', () => {
    let updateProdcutsDto: CreateProdcutsDto;

    beforeEach(async () => {
      updateProdcutsDto = {
        id: '11223344',
        name: 'hola',
        region: 'region',
        description: 'des',
        price: 200,
        image: 'img',
      };

      product = await productsController.updateProduct(
        updateProdcutsDto,
        productsStub().id,
      );
    });

    test('then it should call updateProduct service', () => {
      expect(productsService.createProduct).toHaveBeenCalledWith(
        updateProdcutsDto.name,
        updateProdcutsDto.region,
      );
    });

    test('then it should return a product', () => {
      expect(product).toEqual(productsStub());
    });
  });

  /*
   case 5: 
     - make sure thate we are calling  deleteProduct  on the  deleteProduct service 
     - expect that we return a delete product
  */

  describe('deleteProduct ', () => {
    jest.clearAllMocks();

    beforeEach(async () => {
      product = await productsController.deleteProduct(productsStub().id);
    });

    test('then it shuold call delete products Service', () => {
      expect(productsService.deleteProduct).toBeCalledWith(productsStub().id);

      test('then should delete the product and return ', () => {
        expect(product).toEqual(productsStub());
      });
    });
  });
});
