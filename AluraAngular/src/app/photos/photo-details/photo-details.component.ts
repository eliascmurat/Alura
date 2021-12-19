import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

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
    const id = this.route.snapshot.params.photoId;
    this.getPhotoById(id);
  }

  getPhotoById(id: string) {
    this.photo$ = this.photoService.findById(id);
  }

}
