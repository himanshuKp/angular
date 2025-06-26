import {Component, inject, Signal} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {InvestmentService} from '../investment.service';
import {InvestmentResultData} from '../investment-calculator.model';

@Component({
  selector: 'app-investment-result',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  private _investmentService: InvestmentService = inject(InvestmentService);

  investmentData = this._investmentService.investmentData.asReadonly();
}
