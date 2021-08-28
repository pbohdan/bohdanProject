import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSideBarListComponent } from './app-side-bar-list.component';

@NgModule({
  declarations: [AppSideBarListComponent],
  exports: [AppSideBarListComponent],
  imports: [CommonModule],
})
export class AppSideBarListModule {
}
