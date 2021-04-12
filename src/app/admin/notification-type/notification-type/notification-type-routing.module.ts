import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationTypeComponent } from './notification-type-type.component';

const routes: Routes = [
  { path: '', component: NotificationTypeComponent, pathMatch: '**' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationTypeRoutingModule { }
