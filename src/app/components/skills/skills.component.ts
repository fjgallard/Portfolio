import { Component, OnInit } from '@angular/core';
import { Skill } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  frontend: Skill[]; // rename to frontend
  frameworks: Skill[];
  backend: Skill[];

  constructor() {
    this.initSkills();
  }

  ngOnInit() {
  }

  private initSkills() {
    this.frontend = [
      { name: 'Javascript', imageURL: 'assets/js_logo.png', description: 'Make web pages come to life' },
      { name: 'HTML5', imageURL: 'assets/html5_logo.png', description: 'Building blocks of the web' },
      { name: 'CSS3', imageURL: 'assets/css3_logo.png', description: 'Add style to content' },
    ];

    this.backend = [
      { name: 'Java', imageURL: 'assets/js_logo.png', description: '' },
      { name: 'Firestore', imageURL: 'assets/js_logo.png', description: '' }
    ];

    this.frameworks = [
      { name: 'Angular', imageURL: 'assets/js_logo.png', description: '' }
    ];
  }

}
