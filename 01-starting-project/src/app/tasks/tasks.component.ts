import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddNewTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  completedTask(id: string) {
    this.taskService.deleteTask(id);
  }

  onStartAddTask() {
    this.isAddNewTask = !this.isAddNewTask;
  }

  closeAddNewTask() {
    this.isAddNewTask = false;
  }
}
