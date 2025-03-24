import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  steps = [
    {
      title: "Universidad",
      location: "Reus",
      date: "2021 - 2025"
    },
    {
      title: "FPGS: Nutrición",
      location: "Barcelona",
      date: "2019 - 2021"
    },
    {
      title: "Bachillerato",
      location: "Gelida",
      date: "2017 - 2019"
    },
  ]

  toggleBar(stepTitle: string): boolean {
    if(stepTitle == this.steps[this.steps.length -1].title) {
      console.log("-----> BAR DESACTIVADA");
      return true;
    }
    console.log("--> BAR ACTIVADA");
    return false;
    /* console.log(this.steps[this.steps.length -1].title); */
  }
}
