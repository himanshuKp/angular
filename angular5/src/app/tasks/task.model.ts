import {InjectionToken, Provider} from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
  'TASK_STATUS_OPTIONS'
);

export const TaskStatusOptions: TaskStatusOptions = [
  {value: 'open', taskStatus: 'OPEN', text: 'Open'},
  {value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In Progress'},
  {value: 'done', taskStatus: 'DONE', text: 'Done'},
]

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions
}
