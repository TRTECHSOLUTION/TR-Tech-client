import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  anotherForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.anotherForm = this.fb.group({
      username: ['', Validators.required],
      contactnumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.anotherForm.invalid) {
      return;
    }

    const formData = this.anotherForm.value;

    this.api.registerProject(formData).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Message sent successfully!');
        this.anotherForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong, please try again later.');
      }
    });
  }
}
