import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Section } from 'src/app/models/section.model';
import { RESUME_URL } from 'src/app/models/constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() opened = false;
  @Input() sections: Section[];
  @Input() container: Element;
  @Input() navbarHeight: number;

  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.toggleEvent.emit(false);
  }

  sideNavLinkClicked(section: string) {
    this.scrollTo(section);
    this.closeSideNav();
  }

  scrollTo(sectionName: string) {
    this.sections.forEach(section => {
      if (section.id === sectionName) {
        this.container.scrollTo({top: section.position - section.scrollHeight - this.navbarHeight, behavior: 'smooth'});
      }
    });
  }

  downloadResume() {
    window.open(RESUME_URL);
  }
}
