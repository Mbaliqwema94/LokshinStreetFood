import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderstatusComponent } from './components/orderstatus/orderstatus.component';
import { LandingComponent } from './components/landing/landing.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ChatsComponent } from './components/chats/chats.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
   
  ],
  imports: [
 BrowserModule,
 NgModule,
 AppRoutingModule,
 RegisterComponent,
 LoginComponent,
 HomeComponent,
 OrdersComponent,
 OrderstatusComponent,
 ChatsComponent,
 LandingComponent,
CartComponent,
NavbarComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
