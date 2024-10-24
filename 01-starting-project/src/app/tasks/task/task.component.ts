import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CartComponent } from '../../shared/cart/cart.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CartComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    this.completed.emit(this.task.id);
  }
}
