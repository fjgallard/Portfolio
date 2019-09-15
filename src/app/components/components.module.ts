import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from '../material.module';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [LandingComponent, SkillsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
