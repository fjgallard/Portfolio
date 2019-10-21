import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private SCROLL_OFFSET = 260;

  onLandingPage: boolean;
  onAboutPage: boolean;
  onProjectsPage: boolean;
  onExpPage: boolean;
  onContactsPage: boolean;

  @Input() sections: Section[];
  @Input() navbarHeight: number;
  @Input() container: Element;

  @Output() toggleEvent: EventEmitter<boolean>;

  constructor() {
    this.toggleEvent = new EventEmitter<boolean>();
  }

  ngOnInit() {
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
        this.container.scrollTo({top: section.position - section.scrollHeight - this.navbarHeight, behavior: 'smooth'});
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
      const scrollPosition = e.srcElement.scrollTop;
      this.resetActiveLinks();

      if (scrollPosition < this.sections[0].position - (this.sections[0].scrollHeight / 2)) {
        this.onLandingPage = true;
      } else if (scrollPosition < this.sections[1].position - (this.sections[1].scrollHeight / 2)) {
        this.onAboutPage = true;
      } else if (scrollPosition < this.sections[2].position - (this.sections[2].scrollHeight / 2)) {
        this.onProjectsPage = true;
      } else if (scrollPosition < this.sections[3].position - (this.sections[3].scrollHeight / 2)) {
        this.onExpPage = true;
      } else {
        this.onContactsPage = true;
      }
    });
  }

}
