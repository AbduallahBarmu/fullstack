import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AllProductsComponent } from './all-products.component';
import { By } from '@angular/platform-browser';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(
      fixture.debugElement.query(By.css('.product-container'))
    ).toBeTruthy();

    expect(fixture.debugElement.query(By.css('.product-items'))).toBeTruthy();
  });
});
