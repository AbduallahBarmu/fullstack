import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { Product } from '../models/productModels';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
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
  it('should return all products', () => {
    const productResults: Product[] = [
      {
        _id: '212121',
        name: 'new product',
        region: 'region 1',
        price: 12,
        image: 'img 1',
        description: 'Product 1 description',
      },
    ];

    service.getAllProductsServ().then((result) => {
      expect(result).toBeTruthy();
      expect(result.length).toEqual(1);
      console.log('result verified');
    });
    const req = httpMock.expectOne(environment.baseApi + 'products');
    expect(req.request.method).toBe('GET');
    req.flush(productResults);
  });
});
