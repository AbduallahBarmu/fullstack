import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Product } from '../models/productModels';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // unit testing
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
