import {Component, computed, inject, input} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import {TasksService} from "./tasks.service";
import {ActivatedRouteSnapshot, RouterLink, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>();
  sort = input.required<'asc' | 'desc'>();
  userTasks = input.required<Task[]>();
}

export const taskResolver: (activatedRouteSnapshot: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => Task[] = (
  activatedRouteSnapshot : ActivatedRouteSnapshot,
  routerStateSnapshot: RouterStateSnapshot
)=> {
  const userId = activatedRouteSnapshot.paramMap.get('userId');
  const sort = activatedRouteSnapshot.queryParamMap.get('sort');
  const taskData =  inject(TasksService).allTasks()
    .filter(task => task.userId === userId)
    .sort((a, b) => sort === 'asc' ?
      new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime() :
      new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
  return taskData;
}
