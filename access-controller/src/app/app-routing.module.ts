import { SigninComponent } from './home/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './dashboard/monitor/monitor.component';

const routes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'monitor',
        component: MonitorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
