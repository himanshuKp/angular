import {Injectable, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';
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

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTask) =>
      oldTask.map((task) =>
        task.id === taskId ? {...task, status: newStatus} : task
      )
    )
  }
}
