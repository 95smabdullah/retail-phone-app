import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';

const routes: Routes = [
  { path: '', redirectTo: 'listPhones', pathMatch: 'full'},
  { path: 'listPhones', component:PhonesComponent},
  { path: 'add', component:AddPhoneComponent},
  { path: 'update/:id', component:UpdatePhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
