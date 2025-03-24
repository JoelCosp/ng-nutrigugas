import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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
    emailjs.send('service_rbubghd', 'template_m56ncsz', {...this.form}, {
      publicKey: 'ihb9r2Ly2QLSr7jJO'
    }).then(() => {
      console.log("---> ¡EMAIL SENT!")
    })
  }
}
