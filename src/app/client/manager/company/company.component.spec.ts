import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyComponent } from './company.component';

describe('CompanyComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CompanyComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'y'`, () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('y');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CompanyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('y app is running!');
  });
});
