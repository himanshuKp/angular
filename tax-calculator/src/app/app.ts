import {Component, signal} from '@angular/core';
import {Header} from './header/header';
import {UserInput} from './user-input/user-input';
import {InvestmentResult} from './investment-result/investment-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Header,
    UserInput,
    InvestmentResult
  ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'tax-calculator';
}
