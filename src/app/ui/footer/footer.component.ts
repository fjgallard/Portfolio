import { Component, OnInit } from '@angular/core';
import { GITHUB_URL, LINKEDIN_URL } from 'src/app/models/constants';

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
      window.open(GITHUB_URL);
    } else if (link === 'github') {
      this.githubActive = true;
      window.open(LINKEDIN_URL);
    }
  }

  reset() {
    this.resetActivatedLinks();
  }

  private resetActivatedLinks() {
    this.linkedinActive = false;
    this.githubActive = false;
  }

}
