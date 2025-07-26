import {routes} from "./app.routes";
import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding, withRouterConfig} from "@angular/router";

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({
      paramsInheritanceStrategy: 'always'
    })),
  ]
}
