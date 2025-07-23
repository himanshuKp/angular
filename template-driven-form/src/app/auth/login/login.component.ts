import {afterNextRender, Component, DestroyRef, inject, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule
  ]
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(()=>{
      const subscription = this.form().valueChanges?.pipe(
        debounceTime(500)
      ).subscribe({
        next: (value) => {
          window.localStorage.setItem('user', JSON.stringify({email: value.email}));
        }
      })

      this.destroyRef.onDestroy(()=>{
        subscription?.unsubscribe();
      })
    })
  }

  submitForm(form: NgForm){
    console.log(form);

    const email = form.form.value.email;
    const password = form.form.value.password;
    console.log(email, password);
  }
}
