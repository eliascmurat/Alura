import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(API_URL + 'user/exists/' + userName);
  }

  signUp(newUser: NewUser) {
    return this.http.post(API_URL + 'user/signup', newUser);
  }

}
