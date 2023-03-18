import { Test, TestingModule } from '@nestjs/testing';

import { Product } from '../schemas/products.schema';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';

import { productsStub } from './stubs/products.stub';
import { CreateProdcutsDto } from '../dto/create-products';
import { UpdateProdcutsDto } from '../dto/update.products';

jest.mock('../products.service');
describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  productsStub().id,
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

  /*
   case 1: 
     - make sure that we are calling product by Id on the product service with product Id thet I have passed in 
     - expect that we return a product
  */

  describe('getProductDetails', () => {
    describe('when getProductDetails called', () => {
      let product: Product;

      beforeEach(async () => {
        product = await productsController.getProductDetails(productsStub().id);
        // console.log(product);
      });

      test('then it shuold call productsService', () => {
        expect(productsService.getProductProfileServ).toBeCalledWith(
          productsStub().id,
        );
      });

      test('then it should return a product', async () => {
        const j = {};
        expect(product).toEqual(productsStub());
        // expect(
        //   await productsService.updateProduct('', { name: '', price: 56 }),
        // ).toThrow();
      });
    });
  });

  /*
   case 2: 
     - make sure thate we are calling All product on the product service 
     - expect that we return a products
  */

  describe('getAllProducts', () => {
    describe('when getAllProducts called', () => {
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
  });

  /*
   case 3: 
     - make sure thate we are calling  createProduct  on the  createProduct service 
     - expect that we return a create a product
  */

  describe('createProduct', () => {
    describe('when createProduct called', () => {
      let product: Product;
      let ProductsDto: CreateProdcutsDto;

      beforeEach(async () => {
        ProductsDto;

        product = await productsController.createProduct(ProductsDto);
      });

      test('then it shuold call createProduct service ', () => {
        expect(productsService.createProduct).toHaveBeenCalledWith(ProductsDto);
      });

      test('then it should return a product', () => {
        expect(product).toEqual(productsStub());
      });
    });
  });

  /*
   case 4: 
     - make sure thate we are calling  updateProduct  on the  updateProduct service 
     - expect that we return a updated product
  */

  describe('updateProduct', () => {
    describe('when updateProduct called', () => {
      let product: Product;
      let updateProdcuts: UpdateProdcutsDto;

      beforeEach(async () => {
        updateProdcuts = {
          name: 'test1',
          price: 190,
        };

        product = await productsController.updateProduct(
          updateProdcuts,
          productsStub().id,
        );
      });

      test('then it should call updateProduct service', () => {
        expect(productsService.updateProduct).toHaveBeenCalledWith(
          productsStub().id,
          updateProdcuts,
        );
      });

      test('then it should return a product', () => {
        expect(product).toEqual(productsStub());
      });
    });
  });

  /*
   case 5: 
     - make sure thate we are calling  deleteProduct  on the  deleteProduct service 
     - expect that we return a delete product
  */

  describe('deleteProduct ', () => {
    describe('when deleteProduct called', () => {
      let product: Product;

      beforeEach(async () => {
        product = await productsController.deleteProduct(productsStub().id);
      });

      test('then it shuold call delete products Service', () => {
        expect(productsService.deleteProduct).toBeCalledWith(productsStub().id);
      });

      test('then should delete the product and return ', () => {
        expect(product).toEqual(productsStub());
      });
    });
  });
  //
});
