import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    MatIconModule,
    DropdownModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

  ],
  providers: [MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

