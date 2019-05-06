import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    $(function () {
      $(".navigation_icon").click(function () {
        $(".navigation").toggleClass('navigation-open');
      });
    });
  }
}
