import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './ui/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderModule } from './features/header/app-header.module';
import { FooterModule } from './features/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppSidenavModule } from './features/sidenav/sidenav.module';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    AppSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
