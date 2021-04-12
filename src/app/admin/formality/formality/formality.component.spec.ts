import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalityComponent } from './formality.component';

describe('HotelComponent', () => {
  let component: FormalityComponent;
  let fixture: ComponentFixture<FormalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
