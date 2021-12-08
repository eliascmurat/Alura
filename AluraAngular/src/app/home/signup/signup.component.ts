import { SignUpService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator
          // Validators.pattern(/^[a-z0-9_\-]+$/)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
  }

  ngOnInit() { }

  register() {
    const newUser = this.registerForm.getRawValue() as NewUser;
    this.signUpService
      .signUp(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => {
          alert('Ops... ocorreu um erro!\nTente novamente');
          console.log(err);
        }
      )
  }
}
