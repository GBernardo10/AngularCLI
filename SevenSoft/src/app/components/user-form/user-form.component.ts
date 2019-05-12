import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  edit: boolean = false;

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.userId) {
      this.userService.getUser(params.userId).subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  cadastrarNovoUsuario() {
    delete this.user.userId;
    this.userService.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    )
  }

  atualizarUsuario() {
    this.userService.updateUser(this.user.userId, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    )
  }
}
