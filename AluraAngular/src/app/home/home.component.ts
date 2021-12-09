import { SignUpService } from './signup/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ SignUpService ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
