import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformRoutingModule } from './plataform-routing.module';
import { PlataformComponent } from './plataform.component';


@NgModule({
  declarations: [
    PlataformComponent
  ],
  imports: [
    CommonModule,
    PlataformRoutingModule
  ]
})
export class PlataformModule { }
