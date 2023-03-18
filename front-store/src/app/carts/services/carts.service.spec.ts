// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { CartsService } from './carts.service';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { Observable } from 'rxjs';

// class CardService {
//   constructor(
//     // Bind `fetch ` to `window` to ensure that `window` is the `this` context
//     private fetch = window.fetch.bind(window)
//   ) {}

//   public async getAllCartsServ(): Promise<string[]> {
//     const response = await this.fetch('/products');
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
//     }
//     return await response.json();
//   }
// }

// describe('CartsService', () => {
//   let cartservice: CartsService;
//   // UT
//   let httpMok: HttpTestingController;

//   // Fake products and response object
//   const productsStub: Observable<Object> = [
//     {
//       _id: '212121',
//       name: 'product 1',
//       region: 'region 1',
//       price: 12,
//       image: 'img 1',
//       description: 'Product 1 description',
//     },
//   ];

//   const okResponse = new Response(JSON.stringify(productsStub), {
//     status: 200,
//     statusText: 'OK',
//   });

//   const errorResponse = new Response('Not Found', {
//     status: 404,
//     statusText: 'Not Found',
//   });

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });

//     cartservice = TestBed.inject(CartsService);
//     httpMok = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(cartservice).toBeTruthy();
//   });

//   describe('card service ', () => {
//     it('get products in the card ', async () => {
//       // Arrange
//       const fetchSpy = jasmine.createSpy('fetch').and.returnValue(okResponse);
//       const cartsService = new CartsService(fetchSpy);
//       // Act
//       const actualcards = await cartsService.getAllCartsServ();

//       // Assert
//       expect(actualcards).toEqual(productsStub);
//       expect(fetchSpy).toHaveBeenCalledWith('/products');
//     });

//     it('handle an HTTP error when getting the cards', async () => {
//       // Arrange
//       const fetchSpy = jasmine
//         .createSpy('fetch')
//         .and.returnValue(errorResponse);

//       // Act
//       let error;
//       try {
//         await cartservice.getAllCartsServ();
//       } catch (e) {
//         error = e;
//       }

//       // Assert
//       expect(error).toEqual(new Error('HTTP error : 404 Not Found'));
//       expect(fetchSpy).toHaveBeenCalledWith('/products');
//     });

//     it('get the products', async () => {
//       //Arrang
//       spyOn(window, 'fetch').and.returnValue;

//       // Act
//       const actualProduct = await cartservice.getAllCartsServ();

//       // Assert
//       expect(actualProduct).toEqual(productsStub);
//     });
//   });

//   // UT
//   // it('should return all carts ', () => {
//   //   let params = new HttpParams();
//   //   const cartResults: cartProduct[] = [
//   // {
//   //   _id: '212121',
//   //   name: 'new product',
//   //   region: 'region 1',
//   //   price: 12,
//   //   image: 'img 1',
//   //   description: 'Product 1 description',
//   // },
//   // ];

//   //   service.getAllCartsServ().subscribe((result) => {
//   //     expect(result).toBeTruthy();
//   //   });

//   //   const req = httpMok.expectOne(environment.baseApi + 'carts');
//   //   expect(req.request.method).toBe('GET');
//   //   //flush fack req
//   //   req.flush({});
//   // });
// });
