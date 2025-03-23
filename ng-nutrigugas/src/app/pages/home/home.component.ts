import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ContactComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
