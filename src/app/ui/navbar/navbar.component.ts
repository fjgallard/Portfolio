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
    this.resetActiveLinks();
    this.onLandingPage = true;
    // a little hacky, but placing it here instead of side nav
    document.querySelector('.mat-sidenav-content').addEventListener('scroll', (e: any) => {
      // tslint:disable-next-line: deprecation
      // console.log(e.srcElement.scrollTop);
      const scrollPosition = e.srcElement.scrollTop;
      this.resetActiveLinks();

      if (scrollPosition < 300) {
        this.onLandingPage = true;
      } else if (scrollPosition < 1000) {
        this.onAboutPage = true;
      } else if (scrollPosition < 1800) {
        this.onProjectsPage = true;
      } else if (scrollPosition < 2776) {
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
    document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
  }

  private resetActiveLinks() {
    this.onLandingPage = false;
    this.onAboutPage = false;
    this.onProjectsPage = false;
    this.onExpPage = false;
    this.onContactsPage = false;
  }

}
