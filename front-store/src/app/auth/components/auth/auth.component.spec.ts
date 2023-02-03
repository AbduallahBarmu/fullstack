import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AuthComponent } from './auth.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { AdminService } from 'src/app/admin/services/admin.service';
import { of } from 'rxjs';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj<AuthService>(['signIn']);

    loginServiceSpy.signIn.and.callFake(function (): any {
      return of({
        admin: [
          {
            validAdmin: {
              name: 'abduallah',
              password: '11223344',
            },

            blankAdmin: {
              name: '',
              password: '',
            },
          },
        ],
      });
    });

    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        // material UI
        MatCardModule,
        MatIconModule,
      ],
      providers: [
        {
          provied: AdminService,
          useValue: loginServiceSpy,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // case 1: Ensure the component is successfully created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // case 2: Ensure the component initial state is correct
  it('component initial state ', () => {
    expect(component.authData).toBeFalsy();
    expect(component.errorMessage).toBeFalsy();
    expect(component.isLoginMode).toBeTruthy();
    expect(component.isLoading).toBeTruthy();
  });

  // case 3: submitted should true and authError should be false when onSubmit function called.
  it('submitte shuld be true when onSubmit()', () => {
    // component.onSubmit(validUser);
    expect(component.isLoginMode).toBeTruthy();
    expect(component.isLoginMode).toBeFalsy();
  });
});
