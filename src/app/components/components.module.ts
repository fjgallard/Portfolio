import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '../material.module';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ScrollSpyDirective } from '../directives/scroll-spy/scroll-spy.directive';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    LandingComponent,
    SkillsComponent,
    HomeComponent,
    ScrollSpyDirective,
    ProjectsComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
