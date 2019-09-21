import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSection = 'landing';

  constructor() { }

  ngOnInit() {
  }

  onSectionChange(sectionId: string) {
    console.log(sectionId);
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    const body = document.querySelector('.content');
    const element = document.querySelector('#' + section);
    // document.querySelector('#' + section).scrollIntoView({ behavior: 'smooth' });
    body.animate({
      scrollTop: element.getBoundingClientRect().top
    }, 10000);
  }

}
