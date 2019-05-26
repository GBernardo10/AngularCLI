import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

declare const navBar: any


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isloggedIn: boolean;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.isloggedIn = this.userService.isloggedIn();
    navBar()
  }

  logout() {
    this.userService.logout();
    // this.isloggedIn = false;
  }
}

