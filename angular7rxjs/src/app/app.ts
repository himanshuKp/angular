import {Component, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map, Observable} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private destroyRef = inject(DestroyRef);
  private clickCount = signal(0);
  private clickCount$ = toObservable(this.clickCount);
  private customObservable = new Observable((subscriber) => {
    setInterval(()=>{
      subscriber.next({
        message: 'new value'
      });
    }, 2000);
  })

  constructor() {
    // effect(()=>{
    //   console.log(`Clicked ${this.buttonClick()} times.`);
    // })
  }

  // protected title = 'angular7rxjs';
  ngOnInit() {
    // const subscription = interval(1000)
    //   .pipe(
    //     map((value) => value * 2)
    //   )
    //   .subscribe({
    //   next: (value) => console.log(value)
    // });
    //
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    const subscription = this.clickCount$.subscribe({
      next: value => console.log(`Clicked ${value} times.`)
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  // protected readonly onclick = onclick;

  onClick(){
    this.clickCount.update(prevValue => prevValue + 1);
  }
}

