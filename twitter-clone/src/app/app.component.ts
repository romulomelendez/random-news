import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component'
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		LeftSidebarComponent,
		RightSidebarComponent,
	],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'twitter-clone'
}
