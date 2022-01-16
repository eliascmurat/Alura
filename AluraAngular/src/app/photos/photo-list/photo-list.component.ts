import { LoadingService } from './../../shared/components/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activetedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingService.start();

    this.activetedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activetedRoute.snapshot.data['photos'];
      this.hasPhotos();
    });
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }

  hasPhotos() {
    if (!this.photos.length) {
      this.hasMore = false;
    }
  }

}
