import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ServicesComponent } from '../../components/services/services.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { BlogComponent } from '../../components/blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ContactComponent, ServicesComponent, PresentationComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
