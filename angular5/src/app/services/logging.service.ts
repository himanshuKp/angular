import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatus(status: string) {
    const timestamp = new Date().toLocaleDateString();
    console.log(`[${timestamp} : ${status}`)
  }
}
