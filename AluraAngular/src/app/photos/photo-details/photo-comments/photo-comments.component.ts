import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {
    this.commentForm = formBuilder.group({
      comment: ['', Validators.maxLength(255)]
    });
  }

  ngOnInit() {
    this.getCommentsByPhotoId();
  }

  getCommentsByPhotoId() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

}
