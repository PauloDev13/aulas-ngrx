import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './component/counter/counter.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
