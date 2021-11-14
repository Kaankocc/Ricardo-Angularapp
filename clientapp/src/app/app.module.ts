import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { RicardoComponent } from './ricardo/ricardo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomericardoComponent } from './homericardo/homericardo.component';

@NgModule({
  declarations: [					
    AppComponent,
    RicardoComponent, 
    HomeComponent,
      NavbarComponent,
      HomericardoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
