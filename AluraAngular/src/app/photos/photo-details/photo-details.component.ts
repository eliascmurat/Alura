import { UserService } from './../../core/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

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
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.getPhotoById(photoId);
  }

  getPhotoById(photoId: number) {
    this.photo$ = this.photoService.findById(photoId);
    this.photo$.subscribe(() => {},
      err => {
        console.log(err);
        this.router.navigate(['not-found']);
      }
    );
  }

  remove(photoId: number) {
    this.photoService.removePhoto(photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo removed', true);
          this.router.navigate(['/user', this.userService.getUserName()], { replaceUrl: true });
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not delete the photo!', true);
        }
      );
  }

  like(photoId: number) {
    this.photoService.like(photoId)
      .subscribe(liked => {
        if (liked) {
          this.getPhotoById(photoId);
        }
      })
  }

}
