import {Component, computed, inject, signal} from '@angular/core';
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
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.taskService.tasks().filter((task) => task.status === "OPEN");
      case 'in-progress':
        return this.taskService.tasks().filter((task) => task.status === "IN_PROGRESS");
      case 'done':
        return this.taskService.tasks().filter((task) => task.status === "DONE");
      default:
        return this.taskService.tasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
