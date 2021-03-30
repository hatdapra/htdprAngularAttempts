import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListakComponent } from './pages/listak/listak.component';
import { FuvarokComponent } from './pages/fuvarok/fuvarok.component';
import { TestComponent } from './pages/test/test.component';

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
    path: 'test',
    component: TestComponent
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
