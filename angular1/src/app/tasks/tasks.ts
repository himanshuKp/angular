import {Component, inject, Input} from '@angular/core';
import {Task} from './task/task';
import {NewTaskData, TaskModel} from './task.model';
import {NewTask} from './new-task/new-task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    Task,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: false}) name!: string;
  isAddingTask = false;
  private taskService = inject(TasksService);

  get selectedUserTasks() {
    return this.taskService.getTasksByUserId(this.userId);
  }

  enableTaskCreationModel() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask=!this.isAddingTask;
  }
}
