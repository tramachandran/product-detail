import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatsListComponent } from './components/bats-list/bats-list.component';
import { BatDetailComponent } from './components/bat-detail/bat-detail.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'bats/list',
    pathMatch: 'full'
  },
  {
    path: 'bats/list',
    component: BatsListComponent
  },
  {
    path: 'bats/:id',
    component: BatDetailComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
