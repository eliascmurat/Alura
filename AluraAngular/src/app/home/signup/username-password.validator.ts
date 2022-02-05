import { AbstractControl, ValidatorFn } from "@angular/forms";

export const userNamePassword: ValidatorFn = (control: AbstractControl) => {
  const userName = control.get('userName')?.value;
  const password = control.get('password')?.value;

  if(userName.trim() + password.trim()) {
    return userName != password ? null : { userNamePassword : true };
  } else {
    return null;
  }
}
