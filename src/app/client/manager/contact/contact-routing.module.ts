import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [{
  path: "",
  component: ContactComponent,
  children: [
    {
      path: "list",
      component: ContactListComponent
    },
    {
      path: '',
      redirectTo: 'list',
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
export class ContactRoutingModule { }
