import { Component, Input, OnInit } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _url = '';

  @Input()
  set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }
  get url() {
    return this._url;
  }

  @Input()
  description = '';

  constructor() { }

  ngOnInit() { }

}
