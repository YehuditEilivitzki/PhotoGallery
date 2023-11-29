import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '../photo.interface';
import { PhotoService } from '../photoService.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit{
  
  photoDetailes = {} as Photo;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,private photoService:PhotoService) {}
  ngOnInit(): void {
    //get the photo details
    this.photoService.getPhotoById(this.data).subscribe(x=>{
      console.log(x,"x");
      
      this.photoDetailes=x;
    })
  }
}
