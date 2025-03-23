import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'blog', component: BlogComponent},
    {path: '**', component: HomeComponent},
];
