import {Component, computed, inject, input} from '@angular/core';
import {Task, TaskStatus} from '../../task.model';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../../tasks.service';

@Component({
  selector: 'app-task-item',
  imports: [
    FormsModule
  ],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  private taskService = inject(TasksService);
  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    this.taskService.updateTaskStatus(taskId, newStatus);
  }
}
