import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
 { path: 'plataform', loadChildren: () => import('./plataform/plataform.module').then(m => m.PlataformModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
