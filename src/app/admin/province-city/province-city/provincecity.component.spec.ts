import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceCityComponent } from './provincecity.component';

describe('HotelComponent', () => {
  let component: ProvinceCityComponent;
  let fixture: ComponentFixture<ProvinceCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
