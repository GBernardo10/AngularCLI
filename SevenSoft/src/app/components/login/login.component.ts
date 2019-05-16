import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = {
    userId: 'adm',
    password: 'adm123'
  };

  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }


  login(){
    this.authService.entrar(this.model)
    if(){
      
    }
  }

  // login() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.authService.entrar(this.model)) {
  //       console.log("Login com sucesso");
  //     }
  //   }

  // login() {
  //   this.authService.entrar(this.model)
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
  //       console.log("Login com sucesso");
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('token', this.f.userId.value);
  //       this.router.navigate([this.returnUrl]);
  //     } else {
  //       this.message = "Por favor verifique o userId e a senha";
  //     }
  //   }


    // cadastrarNovoUsuario() {
    //   delete this.user.userId;
    //   this.userService.saveUser(this.user).subscribe(
    //     res => {
    //       console.log(res);
    //       this.router.navigate(['/user']);
    //     },
    //     err => console.error(err)
    //   )
    // }



    // login() {
    //   if (this.loginForm.invalid) {
    //     return;
    //   } else {
    //     if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
    //       console.log("Login com sucesso");
    //       localStorage.setItem('isLoggedIn', "true");
    //       localStorage.setItem('token', this.f.userId.value);
    //       this.router.navigate([this.returnUrl]);
    //     } else {
    //       this.message = "Por favor verifique o userId e a senha";
    //     }
    //   }
    // }

  
}
