import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

    this.returnUrl = this.route.queryParams['returnUrl'] || '/';
  }

  login(formData: NgForm) {
    return this.userService.login(formData).subscribe(
      usr => {
        this.router.navigate(['/dashboard'])
        // this.router.navigate([this.returnUrl]);
        console.log(usr)
      });
    console.log(formData);
  }

}
