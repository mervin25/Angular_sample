import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  formData: any;

  constructor(private location: Location) {
    this.formData = history.state.formData;
  }

  goBack() {
    this.location.back(); 
  }
}