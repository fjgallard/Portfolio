import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkedinActive = false;
  githubActive = false;

  constructor() { }

  ngOnInit() {
  }

  activateLink(link: string) {
    this.resetActivatedLinks();
    if (link === 'linkedin') {
      this.linkedinActive = true;
      window.location.href = 'https://www.linkedin.com/in/francis-jomer-gallardo-7bb220103';
    } else if (link === 'github') {
      this.githubActive = true;
      window.location.href = 'https://github.com/fjgallard';
    }
  }

  private resetActivatedLinks() {
    this.linkedinActive = false;
    this.githubActive = false;
  }

}
