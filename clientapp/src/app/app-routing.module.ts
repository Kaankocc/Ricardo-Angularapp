import { HomericardoComponent } from './homericardo/homericardo.component';
import { HomeComponent } from './Home/Home.component';
import { RicardoComponent } from './ricardo/ricardo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'ricardo', component: RicardoComponent },
  { path: 'ricardohehe', component: HomericardoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
