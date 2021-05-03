import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{
  path: "",
  component: ProfileComponent,
  children: [

    {
      path: "info",
      component: UserDetailComponent
    },
    {
      path: '',
      redirectTo: 'info',
      pathMatch: 'full'
    }]
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
