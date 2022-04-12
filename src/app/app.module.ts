import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    PerfilComponent,
    // FontAwesomeModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    // IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
