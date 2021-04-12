import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDirestionComponent } from './housedirestion.component';

describe('HotelComponent', () => {
  let component: HouseDirestionComponent;
  let fixture: ComponentFixture<HouseDirestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseDirestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDirestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
