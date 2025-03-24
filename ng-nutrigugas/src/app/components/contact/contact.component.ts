import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import {inject} from "@angular/core";

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

  http = inject(HttpClient);

  send() {
    this.http.post('https://api.emailjs.com/api/v1.0/email/send', {
      lib_version: "4.4.1",
      service_id: "service_rbubghd",
      template_id: "template_m56ncsz",
      template_params: {...this.form},
      user_id: "ihb9r2Ly2QLSr7jJO"
    }, {
      responseType: 'text'
    }).subscribe(() => {
      console.log("---> ¡SENT EMAIL!");
    });
  }
}
