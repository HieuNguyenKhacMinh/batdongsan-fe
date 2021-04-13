import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalconyDirectionComponent } from './balcony-direction.component';

describe('HotelComponent', () => {
  let component:  BalconyDirectionComponent;
  let fixture: ComponentFixture< BalconyDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  BalconyDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( BalconyDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
