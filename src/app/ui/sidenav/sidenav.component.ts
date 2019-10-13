import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

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
    console.log('test');
    document.querySelector('.mat-sidenav-content').scrollTop = 300;
  }
}
