import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


isModalOpen: any;

  contactForm: any;
isThankYouModalOpen: any;
  
 
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }
  openModal(event: Event) {
    event.preventDefault(); // Prevent default behavior of the link
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  openThankYouModal() {
    this.isThankYouModalOpen = true;
  }

  closeThankYouModal() {
    this.isThankYouModalOpen = false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission, e.g., send data to server
      this.contactForm.reset(); // Reset the form here
      this.closeModal(); // Close the modal after submission
      this.openThankYouModal(); // Open the thank you modal
    }
  }

}
