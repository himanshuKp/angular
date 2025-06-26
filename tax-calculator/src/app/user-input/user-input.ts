import {Component, EventEmitter, inject, input, output, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentService} from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  private _investmentService: InvestmentService = inject(InvestmentService);

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);
  onCalculate() {
    this._investmentService.onCalculateInvestmentData({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration()
    })
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(5);
    this.duration.set(10);
  }
}
