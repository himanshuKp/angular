import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {HttpHandlerFn, HttpRequest, HttpResponse, provideHttpClient, withInterceptors} from "@angular/common/http";
import {tap} from "rxjs";

function loggingInterceptors(request: HttpRequest<unknown>, next: HttpHandlerFn){
  console.log(request.url);
  return next(request).pipe(
    tap({
      next: event => {
        if (event instanceof HttpResponse) {
          console.log('Response status code', event.status);
          console.log('Response body', event.body);
        }
      }
    })
  );
}


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptors]))]
}).catch((err) => console.error(err));
