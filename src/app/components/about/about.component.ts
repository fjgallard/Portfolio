import { Component, OnInit } from '@angular/core';
import { RESUME_URL } from 'src/app/models/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills = ['javascript', 'html', 'css', 'angular', 'java',
            'firestore', 'nosql', 'git', 'confluence', 'jira'];
  constructor() { }

  ngOnInit() {
  }

  downloadResume() {
    window.open(RESUME_URL);
  }

}
