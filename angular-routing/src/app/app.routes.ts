import {CanMatchFn, Routes} from "@angular/router";
import { routes as userRoutes} from "./users/users.routes";

import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {userNameResolver} from "./users/UserNameResolver";
import {TasksService} from "./tasks/tasks.service";

const dummyCanMatch: CanMatchFn = () => {
  const value = Math.random() > 0.5 ? true : false
  return value;
}

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        component: NoTaskComponent
      },
      {
        path: 'users/:userId',
        component: UserTasksComponent,
        loadChildren: () => import('./users/users.routes').then(
          mod => mod.routes
        ),
        resolve: {
          userName: userNameResolver
        }
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
]
