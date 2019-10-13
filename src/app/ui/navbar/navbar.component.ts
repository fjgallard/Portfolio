import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
    this.resetActiveLinks();
    this.onLandingPage = true;
    // a little hacky, but placing it here instead of side nav
    document.querySelector('.mat-sidenav-content').addEventListener('scroll', (e: any) => {
      // tslint:disable-next-line: deprecation
      console.log(e.srcElement.scrollTop);
      const scrollPosition = e.srcElement.scrollTop;
      this.resetActiveLinks();

      if (scrollPosition < CheckPoint.HOME) {
        this.onLandingPage = true;
      } else if (scrollPosition < CheckPoint.ABOUT) {
        this.onAboutPage = true;
      } else if (scrollPosition < CheckPoint.PROJECTS) {
        this.onProjectsPage = true;
      } else if (scrollPosition < CheckPoint.EXPERIENCE) {
        this.onExpPage = true;
      } else {
        this.onContactsPage = true;
      }
    });
  }

  toggleSidebar() {
    this.toggleEvent.emit();
  }

  scrollTo(section: string) {
    // document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    if (section === 'landing') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 0, behavior: 'smooth'});
    } else if (section === 'skills') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 703, behavior: 'smooth'});
    } else if (section === 'projects') {
      document.querySelector('.mat-sidenav-content').scrollTo({ top: 1438, behavior: 'smooth'});
    } else if (section === 'work-exp') {
      if (window.outerWidth < 860) {
        document.querySelector('.mat-sidenav-content').scrollTo({ top: 2218, behavior: 'smooth'});
      } else {
        document.querySelector('.mat-sidenav-content').scrollTo({ top: 2282, behavior: 'smooth'});
      }
    } else {
      if (window.outerWidth < 860) {
        document.querySelector('.mat-sidenav-content').scrollTo({ top: 2980, behavior: 'smooth'});
      } else {
        document.querySelector('.mat-sidenav-content').scrollTo({ top: 3052, behavior: 'smooth'});
      }

    }
  }

  private resetActiveLinks() {
    this.onLandingPage = false;
    this.onAboutPage = false;
    this.onProjectsPage = false;
    this.onExpPage = false;
    this.onContactsPage = false;
  }

}
