import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListakComponent } from './pages/listak/listak.component';
import { FuvarokComponent } from './pages/fuvarok/fuvarok.component';

const routes: Routes = [
  {
    path: '',
    component: FuvarokComponent
  },
  {
    path: 'listak',
    component: ListakComponent
  },
  {
    path: '**',
    component: FuvarokComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
