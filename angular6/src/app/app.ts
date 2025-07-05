import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Counter} from './counter/counter';
import {Messages} from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [Counter, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular6';
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent component debug output';
  }
}
