import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-b-tech-projects',
  templateUrl: './b-tech-projects.component.html',
  styleUrls: ['./b-tech-projects.component.scss']
})
export class BTechProjectsComponent implements OnInit {
  category: string = '';
  projects: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute,private api: ApiService,) { }

  ngOnInit() {
    // Get category name from route param
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';

      // Call API (replace with your API URL)
      this.http.get<any>('https://api.trtechy.com/api/addproject').subscribe(res => {
        // Example structure:
        // res = { categories: [], types: [], projects: [] }
        this.projects = res.projects.filter((p: any) => p.category === this.category);
      });
    });
  }
}
