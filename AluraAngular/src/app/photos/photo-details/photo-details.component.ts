import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.getPhotoById(photoId);
  }

  getPhotoById(photoId: number) {
    this.photo$ = this.photoService.findById(photoId);
  }

}
