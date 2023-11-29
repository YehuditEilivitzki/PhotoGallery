import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/photo";

  getStartData(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/getStartData`);
  }

  getPhotoByCategory(category: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/getPhotoByCategory/${category}`);
  }

  sortPhotoById(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/sortPhotoById`);
  }
  pagination(page: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/pagination/${page}`);
  }
  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.baseUrl}/getPhotoById/ ${id}`);
  }
}
