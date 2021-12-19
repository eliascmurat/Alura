import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  /***
   * TODO:
   *
   * Angular parte 03,
   * 02 - Lapidando o upload,
   * 07 - Seleção automática de arquivos.
  ***/

  photoForm: FormGroup;
  file: File | null = null;
  preview: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
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
        .subscribe(() => this.router.navigate(['']));
    }
  }

}
