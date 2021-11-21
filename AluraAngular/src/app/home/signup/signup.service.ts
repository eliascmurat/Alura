import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:9000/';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.http.get(API + 'user/exists/' + userName);
  }

}
