import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SidenavComponent, NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SidenavComponent,
    NavbarComponent
  ]
})
export class UiModule { }
