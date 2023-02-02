import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductFormComponent } from './add-product-form.component';
// unit testing
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

describe('AddProductFormComponent', () => {
  let component: AddProductFormComponent;
  let fixture: ComponentFixture<AddProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductFormComponent],
      providers: [AdminService],
      imports: [HttpClientTestingModule, FormsModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
