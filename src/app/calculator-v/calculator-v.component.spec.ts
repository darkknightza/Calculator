import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorVComponent } from './calculator-v.component';

describe('CalculatorVComponent', () => {
  let component: CalculatorVComponent;
  let fixture: ComponentFixture<CalculatorVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
