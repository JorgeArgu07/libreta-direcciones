import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent 
  },
  { path: 'add-contact',
    component: AddContactComponent 
  },
  { path: 'edit-contact/:id',
    component: EditContactComponent 
  },
  { path: 'contact-details/:id',
    component: ContactDetailsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
