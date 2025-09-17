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
}
