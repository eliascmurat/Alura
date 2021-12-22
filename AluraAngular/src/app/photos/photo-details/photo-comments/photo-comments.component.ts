import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number = 0;

  comments$!: Observable<PhotoComment[]>;

  constructor(
    private photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.getCommentsByPhotoId();
  }

  getCommentsByPhotoId() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

}
