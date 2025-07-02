import {Injectable, signal} from '@angular/core';
import {Task} from './task.model';
import {Tasks} from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal<Task[]>([]);

  onAddTask(taskData: {title: string, description: string}) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN"
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}
