import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountriesComponent } from './countries/countries.component';
import { HelpYouComponent } from './help-you/help-you.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FooterComponent } from './footer/footer.component';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { OfertasDetailsComponent } from './ofertas-details/ofertas-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CountriesComponent,
    HelpYouComponent,
    ContactUsComponent,
    NavbarComponent,
    OfertasComponent,
    FooterComponent,
    HelpDetailsComponent,
    OfertasDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
