import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TaskModel} from '../task.model';
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required: true}) task!: TaskModel;
  @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
