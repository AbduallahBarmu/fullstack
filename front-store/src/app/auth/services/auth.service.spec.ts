import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    // UT
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // case 5: Form should be invalid when blank field entered
  it('Form should be invalid when blank field entered', () => {
    service.signIn('abduallah', '11223344').then((res) => {
      expect(res).toBeTruthy;
    });
  });

  // case 5: Form should be valid when blank field entered
  it('Form should be valid when blank field entered', () => {
    service.signIn('', '').then((res) => {
      expect(res).toBeFalsy;
    });
  });
});

// shallow Test
