import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj<ProductsService>([
      'getAllProductsServ',
    ]);

    //direct spyObj to
    productServiceSpy.getAllProductsServ.and.callFake(function (): any {
      return of({
        results: [
          {
            _id: '212121',
            name: 'product 1',
            region: 'region 1',
            price: 12,
            description: 'Product 1 description',
            image: 'img 1',
          },
        ],
      });
    });

    await TestBed.configureTestingModule({
      providers: [
        {
          provied: ProductsService,
          useValue: productServiceSpy,
        },
      ],
      declarations: [ProductComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // case 1: Ensure the component is successfully created
  it('should create product', fakeAsync(() => {
    // call ngOnInit
    component.ngOnInit();
    tick(1000);
    fixture.detectChanges;
    expect(component).toBeTruthy();

    expect(
      fixture.debugElement.query(By.css('.product-container'))
    ).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.product-items'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.product-image'))).toBeTruthy();

    expect(
      fixture.debugElement.query(By.css('.product-name')).nativeNode.textContent
    ).toBe('coffee 1');

    expect(
      fixture.debugElement.query(By.css('.product-region')).nativeElement
        .textContent
    ).toBe('coffee region');

    expect(
      fixture.debugElement.query(By.css('.product-price')).nativeElement
        .textContent
    ).toBe(100);
  }));
});
