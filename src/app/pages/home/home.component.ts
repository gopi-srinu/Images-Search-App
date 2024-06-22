import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Imageresponse } from 'src/app/Model/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class HomeComponent implements OnInit{  
  constructor(private service: ImageService){}
  ngOnInit(): void {}
  imageName!: string;
  isLoaded: boolean = false;
  images = signal<Imageresponse>({
    hits: [
      {
        id: 0,
        pageURL: '',
        type: '',
        tags: '',
        previewURL: '',
        previewWidth: 0,
        previewHeight: 0,
        webformatURL: '',
        webformatWidth: 0,
        webformatHeight: 0,
        largeImageURL: '',
        imageWidth: 0,
        imageHeight: 0,
        imageSize: 0,
        views: 0,
        downloads: 0,
        collections: 0,
        likes: 0,
        comments: 0,
        user_id: 0,
        user: '',
        userImageURL: ''
      }
    ]
  });
  getImagesbyKeywordname(query: string){
    this.service.getImages(query).subscribe((queryResponse: Imageresponse) => {
      this.isLoaded = true;
      this.images.set(queryResponse);
    })
  }
}
