import {Component, signal} from '@angular/core';
import {InfoMessage} from '../info-message/info-message';

@Component({
  selector: 'app-counter',
  imports: [
    InfoMessage
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = signal(0);

  get debugOutput() {
    console.log('[CounterComponent] "debugOutput" binding re-evaluated.');
    return 'Counter component debug output';
  }

  onDecrement() {
    this.count.update((previousCount) => previousCount - 1)
  }

  onIncrement() {
    this.count.update((previousCount) => previousCount + 1)
  }
}
