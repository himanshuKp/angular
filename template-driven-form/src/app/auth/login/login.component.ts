import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime, of} from "rxjs";

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  } else {
    return { mustContainQuestionMark: true };
  }
}

function unqiueEmailChecker(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null);
  }

  return of({ emailTaken: true });
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit{
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email],
      asyncValidators: [unqiueEmailChecker]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    })
  });

  ngOnInit(){
    const savedUser = window.localStorage.getItem('user');
    if (savedUser) {
      const userEmail = JSON.parse(savedUser);
      this.form.patchValue({
        email: userEmail.email
      })
    }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('user', JSON.stringify({
          email: value.email
        }))
      }
    });

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  get isEmailInvalid() {
    return this.form.controls.email.touched &&
      this.form.controls.email.invalid &&
      this.form.controls.email.dirty;
  }

  get isPasswordInvalid() {
    return this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid;
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
