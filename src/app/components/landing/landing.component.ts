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

  scrollTo(section: string) {
    // document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    if (window.outerWidth < 600) {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 757, behavior: 'smooth'});
    } else {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 703, behavior: 'smooth'});
    }

  }
}
