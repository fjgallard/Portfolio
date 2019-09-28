import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '../material.module';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ScrollSpyDirective } from '../directives/scroll-spy/scroll-spy.directive';
import { WorkComponent } from './work/work.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [LandingComponent, SkillsComponent, HomeComponent, ScrollSpyDirective, WorkComponent, BlogComponent, ContactComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
