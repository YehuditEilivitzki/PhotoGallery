import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';
import { PhotoService } from '../photoService.service';
import { Photo } from '../photo.interface';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(private photoService: PhotoService, public dialog: MatDialog) { }

  categoryList: string[] = ["backgrounds", "fashion", "nature", "science", "education",
    "feelings", "health", "people", "places", "animals", "industry", "computer",
    "food", "sports", "transportation", "travel", "buildings", "business", "music"
  ];
  photosArr: Photo[] = []
  currentPage = 1;
  category = new FormControl('');

  ngOnInit(): void {
    this.photoService.getStartData().subscribe(x => {
     this.photosArr=x;
    })
  };
  getPrevPhotos() {
    this.currentPage--;
    this.photoService.pagination(this.currentPage).subscribe(x=>{
      this.photosArr=x;
    });
  }
  getNextPhotos() {
    this.currentPage++;
    this.photoService.pagination(this.currentPage).subscribe(x=>{
     this.photosArr=x
    })
  }


  getPhotoByCategory() {
    this.currentPage=1;
    const category = this.category.value!;
    this.photoService.getPhotoByCategory(category).subscribe(x => {     
      this.photosArr = x;
    });
  }

  sortPhotosById() {
    this.photoService.sortPhotoById().subscribe(x => {
      this.photosArr = x;
    })
  }
  displayPhotoDetails(photoId: number) {
    this.dialog.open(PhotoDetailsComponent, {
      width: '300px',
      height: '200px',
      data: photoId
    });
  }
}
