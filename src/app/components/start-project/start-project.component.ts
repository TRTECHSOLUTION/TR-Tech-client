import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.scss']
})
export class StartProjectComponent {

  //hide
  activeBox: string | null = null;
  showDiv(type: string) {
    this.activeBox = type;
  }

  //end
  projectForm!: FormGroup;
  submitted = false;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.projectForm = this.fb.group({
      thoughts: ['', Validators.required],
      fullname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      budget: ['', Validators.required],
      duration: ['', Validators.required],
      schedule: ['', Validators.required]
    });
  }

  // Handle file selection
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  // Submit form
  onSubmit() {
    this.submitted = true;
    if (this.projectForm.invalid || !this.selectedFile) {
      return;
    }

    const formValues = this.projectForm.value;

    // Prepare FormData for file + text fields
    const formData = new FormData();
    formData.append('thoughts', formValues.thoughts);
    formData.append('fileup', this.selectedFile as File);
    formData.append('fullname', formValues.fullname);
    formData.append('emailid', formValues.emailid);
    formData.append('phonenumber', formValues.phonenumber);
    formData.append('budget', formValues.budget);
    formData.append('duration', formValues.duration);
    formData.append('schedule', formValues.schedule);

    this.api.postProjectDevelopment(formData).subscribe({
      next: (res) => {
        console.log('Success:', res);
        alert('Project submitted successfully!');
        this.projectForm.reset();
        this.selectedFile = null;
        this.submitted = false;
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Something went wrong, please try again.');
      }
    });
  }
}
