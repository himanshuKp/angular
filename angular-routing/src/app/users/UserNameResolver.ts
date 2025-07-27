import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {UsersService} from "./users.service";

export const userNameResolver: (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => string | undefined = (
  activatedRoute : ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
)=> {
  const userId = activatedRoute.paramMap.get('userId');
  const userName = inject(UsersService).users.find(user => user.id === userId)?.name;

  return userName;
}
