import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFromPgComponent } from './users/user-registration/product-registration/product-registration.component';


import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { HomeComponent } from './views/create/home/info-submit/home/home.component';

import { InfoSubmitPgComponent } from './views/create/home/info-submit/info-submit.component';


const routes: Routes = [
  {path:'upload-success',component:HomeComponent},
  {path:'',component:UserRegistrationComponent},
  {path:'product-registration', component:ProductFromPgComponent},
  {path:'info-submit',component:InfoSubmitPgComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
