import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imageresponse } from '../Model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}
  private apiKey = '';
  getImages(searchQuery: string): Observable<Imageresponse>{
    const searchURL = `https://pixabay.com/api/?key=${this.apiKey}&q=${searchQuery}&image_type=photo&pretty=true`;
    return this.http.get<Imageresponse>(searchURL);
  }
}
