import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from './auth.model';
import {AuthService} from './auth.service';

@Directive({
  selector: '[appAuth]'
})
export class Auth {
  userType = input.required<Permission>({alias: 'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()){
        console.log('User permission granted');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        console.log('User permission removed');
        this.viewContainerRef.clear();
      }
    })
  }

}
