import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getDate().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
