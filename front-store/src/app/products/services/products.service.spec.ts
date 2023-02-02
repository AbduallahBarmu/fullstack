import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';

import { Product } from '../models/productModels';

fdescribe('ProductsService', () => {
  let service: ProductsService;
  //UT
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    // UT
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // unit testing

  it('should return a products', () => {
    service.getAllProductsServ().then((result) => {
      expect(result).toBeTruthy();
    });
  });

  // let httpClinetSpy: jasmine.SpyObj<HttpClient>;
  // beforeEach(() => {
  //   httpClinetSpy = jasmine.createSpyObj('HttpClient', ['get']);
  // });

  // // Good Cases:
  // // case 1 :
  // it('should get All product from API', () => {
  //   const expectedGetAllProducts = new ProductsService(httpClinetSpy);
  //   const getProductsResult = expectedGetAllProducts.getAllProductsServ();
  //   expect(getProductsResult).toBe(<Promise<Product[]>>)
  // });

  // // case 2
  // it('should get product by ID',() =>{
  //   // const product:[] = []
  //   // const products = product
  //   const expectGetProductById = new ProductsService(httpClinetSpy)
  //   const productByIdResult = expectGetProductById.getProductByIdServ('id223344')
  //   expect(productByIdResult).toBe(<Promise<Product[]>>)
  // })
});
