import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    // To test a service,we set the 'providers' metadata property, with an array of the services that we'll test
    TestBed.configureTestingModule({ providers: [SharedService] });
  });

  it('Should be create SharedService', () => {
    service = TestBed.inject(SharedService);
    expect(service).toBeTruthy();
  });
});
