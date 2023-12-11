import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LearningPackageService {
  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getLearningPackage(): Observable<any[]> {
    const apiUrl = `${this.backendUrl}/api/learning-package`;
    return this.http.get<any[]>(apiUrl);
  }
}
