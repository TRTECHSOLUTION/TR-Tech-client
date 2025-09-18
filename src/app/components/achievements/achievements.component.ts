import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit{
  groupedData: { [key: string]: any[] } = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAchievements().subscribe({
      next: (res: any) => {
        if (res.success && res.data) {
          this.groupByType(res.data);
        }
      },
      error: (err) => {
        console.error('Error fetching achievements:', err);
      }
    });
  }

  groupByType(data: any[]) {
    this.groupedData = data.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {});
  }
}
