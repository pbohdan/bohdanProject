import { Component } from '@angular/core';

import { IMenuItem } from '../../data/interface/menuItem.interface';
import { MENU_ITEMS } from './main-layout.constans';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  public isHiddenSidenav: boolean = false;
  public valueMenuItems: IMenuItem[] = MENU_ITEMS;
}
