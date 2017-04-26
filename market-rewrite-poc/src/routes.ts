import { Routes } from '@angular/router'
import { HomeComponent, AboutComponent, ContactComponent, ServicesComponent } from './app/pages'

export const appRoutes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]