import { Component, OnInit } from '@angular/core';

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

}
