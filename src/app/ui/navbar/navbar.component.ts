import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleEvent: EventEmitter<boolean>;

  constructor() {
    this.toggleEvent = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleEvent.emit();
  }

}
