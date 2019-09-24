import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-portfolio';
  opened = false;

  toggleSideNav() {
    this.opened = !this.opened;
  }

  updateNav() {
    this.opened = false;
  }
}
