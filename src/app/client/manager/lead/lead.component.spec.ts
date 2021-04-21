import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LeadComponent } from './lead.component';

describe('LeadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LeadComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LeadComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'y'`, () => {
    const fixture = TestBed.createComponent(LeadComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('y');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LeadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('y app is running!');
  });
});
