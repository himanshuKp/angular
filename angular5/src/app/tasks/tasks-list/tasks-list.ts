import {Component, inject, signal} from '@angular/core';
import {TaskItem} from './task-item/task-item';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [
    TaskItem
  ],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList {
  private taskService = inject(TasksService);
  selectedFilter = signal<string>('all');
  tasks = this.taskService.tasks.asReadonly();

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
