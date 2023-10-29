import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.loggedIn = true;
    return from(this.auth.signInWithEmailAndPassword(email, password));
  
  }

  logout() {
    this.loggedIn = false;
    return from(this.auth.signOut());
    
  }

  register(firstName: string, lastName: string, email: string, password: string) {
    return from(this.auth.createUserWithEmailAndPassword(email, password));
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
