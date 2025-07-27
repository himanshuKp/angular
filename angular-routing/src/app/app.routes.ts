import {Routes} from "@angular/router";
import { routes as userRoutes} from "./users/users.routes";

import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {userNameResolver} from "./users/UserNameResolver";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    resolve: {
      userName: userNameResolver
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
