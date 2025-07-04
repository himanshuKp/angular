import {NewTaskData, TaskModel} from './task.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
  private dummyTasks: TaskModel[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  getTasksByUserId(userId: string): TaskModel[] {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskData, userId: string): void {
    const newTask: TaskModel = {
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    };
    this.dummyTasks.push(newTask);
  }

  deleteTask(taskId: string): void {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
  }
}
