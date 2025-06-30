import {Directive, input, InputSignal} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmEvent($event)'
  }
})
export class SafeLinkDirective {
  queryParams: InputSignal<string> = input('myAppLink', {alias: 'appSafeLink'});

  constructor() {
    console.log('SafeLink directive');
  }

  onConfirmEvent(event: MouseEvent){
    console.log('Preventing default');
    const result = window.confirm("Are you sure you want to leave this page?");
    if (result){
      const address =  (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParams();
      return;
    }
    event.preventDefault();
  }
}
