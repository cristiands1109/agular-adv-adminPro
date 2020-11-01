import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
