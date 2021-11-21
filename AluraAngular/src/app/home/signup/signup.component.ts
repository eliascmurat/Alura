import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService
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
          // Validators.pattern(/^[a-z0-9_\-]+$/),
          lowerCaseValidator
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

  register() { }
}
