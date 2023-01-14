import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ToastrModule
  ]
})
export class AuthModule { }
