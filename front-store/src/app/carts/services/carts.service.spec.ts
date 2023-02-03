import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CartsService } from './carts.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { cartProduct } from 'src/app/products/models/cartModels';

describe('CartsService', () => {
  let service: CartsService;
  // UT
  let httpMok: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CartsService);
    // UT
    httpMok = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // UT
  it('should return all carts ', () => {
    let params = new HttpParams();
    const cartResults: cartProduct[] = [
      // {
      //   _id: '212121',
      //   name: 'new product',
      //   region: 'region 1',
      //   price: 12,
      //   image: 'img 1',
      //   description: 'Product 1 description',
      // },
    ];

    service.getAllCartsServ().subscribe((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpMok.expectOne(environment.baseApi + 'carts');
    expect(req.request.method).toBe('GET');
    //flush fack req
    req.flush({});
  });
});
