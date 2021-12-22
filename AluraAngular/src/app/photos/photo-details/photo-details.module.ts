import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ]
})
export class PhotoDetailsModule { }
