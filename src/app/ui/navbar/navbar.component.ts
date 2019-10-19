import { Component, OnInit, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { Section } from 'src/app/models/section.model';

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

  @Input() sections: Section[];

  container: Element;
  sectionPositions: number[];

  @Output() toggleEvent: EventEmitter<boolean>;

  constructor() {
    this.toggleEvent = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.container = document.querySelector('.mat-sidenav-content');

    this.resetActiveLinks();
    this.onLandingPage = true;

    this.initActiveLinkListener();
  }

  toggleSidebar() {
    this.toggleEvent.emit();
  }

  scrollTo(sectionName: string) {
    this.sections.forEach(section => {
      if (section.id === sectionName) {
        this.container.scrollTo({top: section.position - section.scrollHeight, behavior: 'smooth'});
      }
    });
  }

  private resetActiveLinks() {
    this.onLandingPage = false;
    this.onAboutPage = false;
    this.onProjectsPage = false;
    this.onExpPage = false;
    this.onContactsPage = false;
  }

  private initActiveLinkListener() {
    this.container.addEventListener('scroll', (e: any) => {
      // tslint:disable-next-line: deprecation
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

}
