import {Component, inject, NgZone, OnInit, signal} from '@angular/core';
import {InfoMessage} from '../info-message/info-message';

@Component({
  selector: 'app-counter',
  imports: [
    InfoMessage
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnInit{
  private zone = inject(NgZone);
  count = signal(0);

  get debugOutput() {
    console.log('[CounterComponent] "debugOutput" binding re-evaluated.');
    return 'Counter component debug output';
  }

  ngOnInit() {

    setTimeout(()=> {
      this.count.set(0);
    }, 4000);

    this.zone.runOutsideAngular(()=>{
      setTimeout(()=>{
        console.log('Running outside of Angular');
      }, 5000);
    })
  }

  onDecrement() {
    this.count.update((previousCount) => previousCount - 1)
  }

  onIncrement() {
    this.count.update((previousCount) => previousCount + 1)
  }
}
