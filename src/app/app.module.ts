import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { NgMaterialModule } from './ng-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducer} from '@ngrx/store';
import { TradeInReducer } from './reducer/tradein.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { ProductFromPgComponent } from './users/user-registration/product-registration/product-registration.component';
import { InfoSubmitPgComponent } from './views/create/home/info-submit/info-submit.component';
import { HomeComponent } from './views/create/home/info-submit/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    ProductFromPgComponent,
    InfoSubmitPgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgMaterialModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule, 
    ReactiveFormsModule,
    StoreModule.forRoot({
      tradein:(TradeInReducer.Reduce as ActionReducer<any>)
    }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
