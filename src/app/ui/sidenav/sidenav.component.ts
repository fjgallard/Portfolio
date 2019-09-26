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

  toggleSideNav() {
    // rename this to "close sidenav";
    this.opened = false;
    this.toggleEvent.emit(false);
  }

  sideNavLinkClicked(section: string) {
    this.scrollTo(section).then((res) => {
      this.toggleSideNav();
    });
  }

  scrollTo(section: string): Promise<boolean> {
    document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    return Promise.resolve(true);
  }
}
