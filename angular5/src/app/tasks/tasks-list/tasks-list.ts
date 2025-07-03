import {Component, computed, inject, signal} from '@angular/core';
import {TaskItem} from './task-item/task-item';
import {TasksService} from '../tasks.service';
import {TASK_STATUS_OPTIONS, taskStatusOptionsProvider} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  imports: [
    TaskItem
  ],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
  providers: [taskStatusOptionsProvider]
})
export class TasksList {
  taskServiceOptions = inject(TASK_STATUS_OPTIONS);
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
