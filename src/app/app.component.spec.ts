import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
     //var number1 :number = 0;
     //var number2 :number = 0;
     //var result : number = 0;

    var calc : AppComponent;


  beforeEach(async(() => {
    alert("beforeEach called");
    calc = new AppComponent();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe("when calc is used to peform basic math operations", function(){
    alert("internal describe called ");

    it("should be able to calculate sum of 3 and 5", function() {
      alert("inside it");
      expect(calc.add(3,5)).toEqual(8);
  });
  });

// ------html test cases------------
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'JasmineKarmaExample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JasmineKarmaExample');
  });

  it(`should have as title 'kinjal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title1).toEqual('kinjal');
  });

  
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to JasmineKarmaExample!');
  // });

  
});

