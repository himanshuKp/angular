import {routes} from "./app.routes";
import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ]
}
