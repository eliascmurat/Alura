import { UserNotTakenValidatorService } from './../signup/user-not-taken.validator.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('usernameInput')
  usernameInput: ElementRef<HTMLInputElement> | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.router.navigate(['user', username]),
        err => {
          this.platformDetectorService.isPlatformBrowser() &&
            this.usernameInput?.nativeElement.focus();
          this.loginForm.reset();
        }
      );
  }
}
