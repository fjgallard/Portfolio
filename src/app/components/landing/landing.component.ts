import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    const navbar = document.querySelector('.nav-content');
    const container = document.querySelector('.mat-sidenav-content');

    container.scrollTo({
      top: document.querySelector('#landing').scrollHeight - navbar.clientHeight,
      behavior: 'smooth'
    });
  }
}
