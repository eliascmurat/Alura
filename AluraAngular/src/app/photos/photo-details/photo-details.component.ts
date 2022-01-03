import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.getPhotoById(photoId);
  }

  getPhotoById(photoId: number) {
    this.photo$ = this.photoService.findById(photoId);
  }

  remove(photoId: number) {
    this.photoService.removePhoto(photoId)
      .subscribe(
        () => this.router.navigate([''])
      );
  }

}
