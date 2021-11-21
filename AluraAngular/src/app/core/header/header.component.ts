import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User | null>;

  constructor(
    private userService: UserService,
  ) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit() { }

  logout() {
    this.userService.logout();
  }
}
