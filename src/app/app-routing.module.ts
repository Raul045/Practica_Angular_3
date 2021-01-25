import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {FirstComponent} from '../app/first/first.component'
import {SecondComponent} from '../app/second/second.component'
import {NotFoundComponent} from '../app/not-found/not-found.component'

const routes: Routes = [
  {path: 'ruta1', component: FirstComponent},
  {path: 'ruta2', component: SecondComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
