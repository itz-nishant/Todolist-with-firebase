import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    const firstName: any = this.signupForm.value.firstName;
    const lastName: any = this.signupForm.value.lastName;
    const email: any= this.signupForm.value.email;
    const password: any = this.signupForm.value.password;

    if (firstName && lastName && email && password) {
      this.authService.register(firstName, lastName, email, password).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sign-up successful!' });
        },
        () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to sign up!' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to retrieve users!' });
    }
  }
}
