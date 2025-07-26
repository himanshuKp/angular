import {routes} from "./app.routes";
import {ApplicationConfig} from "@angular/core";
import {provideRouter, withComponentInputBinding} from "@angular/router";

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
}
