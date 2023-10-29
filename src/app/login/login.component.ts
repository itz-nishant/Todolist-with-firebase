import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const email: string = this.loginForm.value.email as string;
    const password: string = this.loginForm.value.password as string;

    this.authService.login(email, password).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful!' });
        this.authService.isLoggedIn();
        this.router.navigate(['dashboard']);
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
      }
    );
  }
}
