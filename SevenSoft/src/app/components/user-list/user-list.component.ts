import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      res => {
        this.user = res;
      }
    )
  }

}
