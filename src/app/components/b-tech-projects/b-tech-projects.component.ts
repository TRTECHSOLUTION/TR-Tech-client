import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-b-tech-projects',
  templateUrl: './b-tech-projects.component.html',
  styleUrls: ['./b-tech-projects.component.scss']
})
export class BTechProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryPath = params.get('category-projects'); // like "phd-projects"
      const category = categoryPath?.replace('-projects', ''); // "phd"

      this.route.queryParamMap.subscribe(query => {
        const type = query.get('type'); // "CSE"

        this.api.getProjects().subscribe((res: any) => {
          if (res.success) {
            // find category first
            const cat = res.data.find((c: any) =>
              c.category.toLowerCase() === category?.toLowerCase()
            );

            if (cat) {
              // find type inside category
              const typeData = cat.types.find((t: any) =>
                t.type.toLowerCase() === type?.toLowerCase()
              );

              this.projects = typeData ? typeData.projects : [];
            }
          }
        });
      });
    });
  }
}
