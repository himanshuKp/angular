import {Injectable, signal} from '@angular/core';
import {InvestmentData, InvestmentResultData} from './investment-calculator.model';

@Injectable({providedIn: 'root'})
export class InvestmentService {
  investmentData = signal<InvestmentResultData[] | undefined>(undefined);

  onCalculateInvestmentData(investmentData: InvestmentData) {
    const annualData: InvestmentResultData[] = [];
    const {initialInvestment, annualInvestment, expectedReturn, duration} = investmentData;
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investmentData.set(annualData);
  }
}
