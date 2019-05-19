import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

declare const navBar: any

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navBar()
  }
}
