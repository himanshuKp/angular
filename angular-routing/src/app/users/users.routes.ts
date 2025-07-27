import {Routes} from "@angular/router";
import {taskResolver, TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../tasks/new-task/new-task.component";


export const routes : Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      userTasks: taskResolver
    }
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent
  }
]
