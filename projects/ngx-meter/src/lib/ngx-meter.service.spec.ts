import { TestBed, inject } from '@angular/core/testing';

import { NgxMeterService } from './ngx-meter.service';

describe('NgxMeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMeterService]
    });
  });

  it('should be created', inject([NgxMeterService], (service: NgxMeterService) => {
    expect(service).toBeTruthy();
  }));
});
