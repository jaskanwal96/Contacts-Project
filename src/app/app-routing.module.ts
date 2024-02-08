import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {MessagesHistoryComponent} from './messages-history/messages-history.component';

const routes: Routes = [
  { path: 'contacts', component: ContactComponent },
  { path: 'messages', component: MessagesHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
