import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

interface AddProjectType {
  type: string;
  projects: any[];
}

interface AddProjectCategory {
  category: string;
  types: AddProjectType[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //nav bar 
  categories: AddProjectCategory[] = [];
  loading = false;
  error: string | null = null;
  activeIndex: number | null = null;
  //navbar end
  anotherForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
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
  //nav
  loadCategories() {
    this.loading = true;
    this.api.getProjects().subscribe({
      next: (res: any) => {
        this.loading = false;
        // API returns { success: true, data: [...] }
        if (res && res.data && Array.isArray(res.data)) {
          this.categories = res.data as AddProjectCategory[];
        } else {
          this.categories = [];
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to load projects';
        console.error('getProjects error', err);
      }
    });
  }

  // toggle open/close dropdown by index
  toggleDropdown(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }

  // optional: called when a type clicked
  selectType(category: string, type: string) {
    // Example: navigate to a route and pass category/type as query params
    // change to whatever behavior you want
    this.router.navigate(['/projects'], { queryParams: { category, type } });
    // close dropdown
    this.activeIndex = null;
  }
  //nav end
}
