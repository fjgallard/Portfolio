import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home/home.component';
import { ScrollSpyDirective } from '../directives/scroll-spy/scroll-spy.directive';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    ScrollSpyDirective,
    ProjectsComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    WorkExpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ServicesModule
  ]
})
export class ComponentsModule { }
