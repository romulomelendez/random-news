import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { XLogoComponent } from '../x-logo/x-logo.component'

@Component({
	selector: 'app-top-menu',
	standalone: true,
	templateUrl: './top-menu.component.html',
	imports: [XLogoComponent, MatIconModule],
})
export class TopMenuComponent {}
