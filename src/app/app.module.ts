import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { DocsComponent } from './mycomponents/docs/docs.component';
import { DevloperscornerComponent } from './mycomponents/devloperscorner/devloperscorner.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    DevloperscornerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
