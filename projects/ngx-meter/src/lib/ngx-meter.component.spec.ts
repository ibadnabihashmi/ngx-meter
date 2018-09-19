import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMeterComponent } from './ngx-meter.component';

describe('NgxMeterComponent', () => {
  let component: NgxMeterComponent;
  let fixture: ComponentFixture<NgxMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
