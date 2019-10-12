import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidenavComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class UiModule { }
