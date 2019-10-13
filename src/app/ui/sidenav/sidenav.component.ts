import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() opened = false;
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.toggleEvent.emit(false);
  }

  sideNavLinkClicked(section: string) {
    // this.closeSideNav();
    this.scrollTo(section);
    this.closeSideNav();
  }

  scrollTo(section: string) {
    // const x = document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    if (section === 'landing') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 0, behavior: 'smooth'});
    } else if (section === 'skills') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 757, behavior: 'smooth'});
    } else if (section === 'projects') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 1559, behavior: 'smooth'});
    } else if (section === 'work-exp') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 2849, behavior: 'smooth'});
    } else {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 3609, behavior: 'smooth'});
    }
  }
}
