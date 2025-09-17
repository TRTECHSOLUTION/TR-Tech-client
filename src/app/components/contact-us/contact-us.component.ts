import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: ['', Validators.required],
      contactnumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;

    this.api.registerProject(formData).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Message sent successfully!');
        this.contactForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong, please try again later.');
      }
    });
  }
}
