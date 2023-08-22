import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpYouComponent } from './help-you/help-you.component';
import { CountriesComponent } from './countries/countries.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HelpDetailsComponent } from "./help-details/help-details.component";
import { OfertasDetailsComponent } from './ofertas-details/ofertas-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'help', component: HelpYouComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'trabajos', component: OfertasComponent},
  {path: 'help-details', component: HelpDetailsComponent},
  {path: 'trabajos-details', component: OfertasDetailsComponent},


  {path: '**', redirectTo: '', pathMatch:'full'},


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
