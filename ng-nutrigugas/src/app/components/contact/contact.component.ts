import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string,
  email: string,
  message: string
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form: ContactForm = {
    name: '',
    email: '',
    message: ''
  }

  send() {
    console.log(this.form);
  }
}
