import { Component } from '@angular/core'
import { SettingsButtonComponent } from '../settings-button/settings-button.component'
import { TabMenuComponent } from '../tab-menu/tab-menu.component'
import { XLogoComponent } from '../x-logo/x-logo.component'

@Component({
	selector: 'app-top-menu',
	standalone: true,
	templateUrl: './top-menu.component.html',
	imports: [XLogoComponent, SettingsButtonComponent, TabMenuComponent],
})
export class TopMenuComponent {}
