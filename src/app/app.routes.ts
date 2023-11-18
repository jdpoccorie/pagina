import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TourComponent } from './tour/tour.component';
import { PaquetesTusristicosComponent } from './paquetes-tusristicos/paquetes-tusristicos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'Tour', component:TourComponent},
    {path:'paquetesT', component:PaquetesTusristicosComponent},
    {path:'Ofertas', component:OfertasComponent},
    {path:"**", redirectTo:"home"}
];
