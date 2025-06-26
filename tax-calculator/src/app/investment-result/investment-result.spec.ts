import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResult } from './investment-result';

describe('InvestmentResult', () => {
  let component: InvestmentResult;
  let fixture: ComponentFixture<InvestmentResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
