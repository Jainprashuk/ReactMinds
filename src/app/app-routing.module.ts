import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevloperscornerComponent } from './mycomponents/devloperscorner/devloperscorner.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { DocsComponent } from './mycomponents/docs/docs.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent , outlet: 'primary' },
  { path: 'devloperscorner', component: DevloperscornerComponent , outlet: 'primary' },
  { path: 'home', component: HomeComponent , outlet: 'primary' },
  { path: 'docs', component: DocsComponent , outlet: 'primary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
