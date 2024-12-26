import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/componentes/login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LoginComponent, // Adicionando o componente de login
  ],
  providers: [],
})
export class AuthModule {}
