import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css'
})
export class ServerStatus implements OnInit{
  currentStatus = 'online';

  constructor() {
    console.log('Server Status');
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
}
