import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';



import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClubComponent } from './club/club.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';

import { SentEmailComponent } from './login/sent-email/sent-email.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';


const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    ClubComponent,
    ForgetPasswordComponent,
    SentEmailComponent,
    RegistrationComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatDialogModule,
		NgxMaskModule.forRoot()

    
  ], 

})
export class PagesModule { }
