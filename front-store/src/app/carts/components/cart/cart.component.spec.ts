import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CartComponent } from './cart.component';
import { By } from '@angular/platform-browser';
import { CartsService } from '../../services/carts.service';
import { of } from 'rxjs';

describe('CartComponent', () => {
  // Arrange
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    console.log('called before all specs are run ');

    const cartsServiceSpy = jasmine.createSpyObj<CartsService>([
      'getAllCartsServ',
      'deleteRecordServ',
    ]);

    cartsServiceSpy.getAllCartsServ.and.callFake(function (): any {
      return of({
        resutlts: [
          {
            _id: '212121',
            name: 'product 1',
            region: 'region 1',
            price: 12,
            image: 'img 1',
            description: 'Product 1 description',
          },
        ],
      });
    });

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CartComponent],
      providers: [cartsServiceSpy],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card', () => {
    expect(component).toBeTruthy();
  });

  // UT
  it('should create product', fakeAsync(() => {
    component.ngOnInit();

    fixture.detectChanges;
    expect(component).toBeTruthy();
  }));

  describe('card operations ', () => {
    // case1: test cart length
    it('should return products number in the card', () => {
      expect(
        fixture.debugElement.query(By.css('.product-length')).nativeElement
          .textContent
      ).toEqual(4);
    });

    // case2: test total amount

    // case3: test increase amount
    // it('incremens the amount', () => {});

    // case4: test decrease amount

    // case5: test delete cart

    // case6: test clear cart page
  });
});
