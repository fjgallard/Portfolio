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

  toggleSideNav() {
    this.opened = false;
    this.toggleEvent.emit(false);
  }

}
