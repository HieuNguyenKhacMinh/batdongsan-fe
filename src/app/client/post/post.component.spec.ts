import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PostComponent
      ],
    }).compileComponents();
  }));

  it('should create the post', () => {
    const fixture = TestBed.createComponent(PostComponent);
    const post = fixture.componentInstance;
    expect(post).toBeTruthy();
  });

  it(`should have as title 'y'`, () => {
    const fixture = TestBed.createComponent(PostComponent);
    const post = fixture.componentInstance;
    expect(post.title).toEqual('y');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('y post is running!');
  });
});
