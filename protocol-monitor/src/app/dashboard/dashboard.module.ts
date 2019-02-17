import { BasicBoxModule } from './../shared/components/basic-box/basic-box.module';
import { NgModule } from '@angular/core';
import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
  declarations: [ MonitorComponent ],
  imports: [ BasicBoxModule ]
})
export class DashboardModule { }
