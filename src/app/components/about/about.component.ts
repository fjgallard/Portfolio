import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  RESUME_URL = 'https://firebasestorage.googleapis.com/v0/b/fir-project-c19b4.appspot.com/' +
  'o/Francis%20Jomer%20Gallardo%20-%20Resume.pdf?alt=media&token=4692aa0e-6cc6-44e4-9f61-faf4a18d869e';

  skills = ['javascript', 'html', 'css', 'angular', 'java',
            'firestore', 'nosql', 'git', 'confluence', 'jira'];
  constructor() { }

  ngOnInit() {
  }

  downloadResume() {
    window.open(this.RESUME_URL);
  }

}
