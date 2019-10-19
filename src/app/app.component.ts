import { Component, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Section } from './models/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'github-portfolio';
  opened = false;

  sections: Section[];
  sectionPositions: number[];

  navbarHeight: number;
  container: Element;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.container = document.querySelector('.mat-sidenav-content');
  }

  ngAfterViewChecked(): void {
    this.initSections();
    const navbar = document.querySelector('.nav-content');
    this.navbarHeight = navbar.clientHeight;

    this.cdRef.detectChanges();
  }

  toggleSideNav() {
    this.opened = !this.opened;
  }

  updateNav() {
    this.opened = false;
  }

  private initSections() {
    const elements = this.container.getElementsByTagName('section');
    const elemArr = Array.from(elements);

    let sum = 0;
    this.sections = elemArr.map(element => {
      return {
        id: element.id,
        position: sum += element.scrollHeight,
        scrollHeight: element.scrollHeight
      };
    });
  }
}
