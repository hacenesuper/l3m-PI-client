import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitesComponent } from './visites/visites.component';

const routes: Routes = [
  {path:'visites', component: VisitesComponent}
  ,{path:'home',component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
