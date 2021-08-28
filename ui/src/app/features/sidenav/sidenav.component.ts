import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IMenuItem } from '../../data/interface/menuItem.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidenavComponent {
  @Input() hiddenMenu: boolean;
  @Input() menuItems: IMenuItem[];

  @Output() activeMenuItem: EventEmitter<string> = new EventEmitter;
}
