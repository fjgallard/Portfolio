import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  onLandingPage: boolean;
  onAboutPage: boolean;
  onProjectsPage: boolean;
  onExpPage: boolean;
  onContactsPage: boolean;

  @Output() toggleEvent: EventEmitter<boolean>;

  constructor() {
    this.toggleEvent = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.onLandingPage = false;
    this.onAboutPage = false;
    this.onProjectsPage = false;
    this.onExpPage = false;
    this.onContactsPage = false;
  }

  toggleSidebar() {
    this.toggleEvent.emit();
  }

  scrollTo(section: string) {
    document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
  }

}
