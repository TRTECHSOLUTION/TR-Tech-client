import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  registerProject(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerproject`, payload);
  }
  getAchievements() {
    return this.http.get(`${this.baseUrl}/achievements`);
  }
  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/addproject`);
  }
  postProjectDevelopment(formData: FormData) {
    return this.http.post(`${this.baseUrl}/projectdevelopment`, formData);
  }
}
