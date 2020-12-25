import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { TacheDetailsComponent } from './tache-details/tache-details.component';


const routes: Routes = [
  { path : 'Taches', component : ListTachesComponent},
  { path : 'Taches/:id', component : TacheDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
