import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppSideBarListModule } from '../side-bar-list/app-side-bar-list.module';

@NgModule({
  declarations: [AppSidenavComponent],
  exports: [AppSidenavComponent],
  imports: [CommonModule, MatSidenavModule, MatListModule, AppSideBarListModule],
})
export class AppSidenavModule {
}
