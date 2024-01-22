import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component'
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component'
import { TopMenuComponent } from "./components/top-menu/top-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterOutlet,
        LeftSidebarComponent,
        RightSidebarComponent,
        TopMenuComponent
    ]
})
export class AppComponent {
	title = 'twitter-clone'
}
