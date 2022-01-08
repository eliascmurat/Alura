import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File | null = null;
  preview: string = '';
  percentDone: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  ngOnInit() { }

  loadPhoto(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = target?.files?.item(0) as File;

    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target?.result;
    reader.readAsDataURL(this.file);
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;

    if (this.file !== null) {
      this.photoService.uploadPhoto(description, allowComments, this.file)
        .pipe(finalize(() => {
          this.router.navigate(['/user', this.userService.getUserName()]);
        }))
        .subscribe(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress) {
              if (event.total) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
              }
            } else if (event.type === HttpEventType.Response) {
              this.alertService.success('Upload complete', true);
            }
          },
          (err) => {
            console.log(err);
            this.alertService.danger('Upload error!', true);
          }
        );
    }
  }

}
