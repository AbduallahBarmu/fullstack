import { TestBed } from '@angular/core/testing';

import { CartsService } from './carts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('CartsService', () => {
  let service: CartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // unit testing
  //   let httpClinetSpy: jasmine.SpyObj<HttpClient>;

  //   beforeEach(() => {
  //     httpClinetSpy = jasmine.createSpyObj('HttpClient', ['get']);
  //   });
  //   // case 1 :
  //   it('should get cart', () => {
  //     const expectedGetCarts = new CartsService(httpClinetSpy);
  //     const getCartsResult = expectedGetCarts.getAllCartsServ()

  //     expect(getCartsResult).toBe(<Observable<Object>>)

  //   })

  //   it('should delete cart by id ', () => {
  //     const expectedDeleteCartById = new CartsService(httpClinetSpy);
  //     const deleteCartByIdResult = expectedDeleteCartById.deleteRecordServ(123456)

  //     expect(deleteCartByIdResult).toBe(<Observable<Object>>)

  //   })
});
