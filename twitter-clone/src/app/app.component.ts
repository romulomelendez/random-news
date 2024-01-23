import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component'
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component'
import { TopMenuComponent } from "./components/top-menu/top-menu.component";
import { PostComponent } from "./components/post/post.component";
import { FooterMenuComponent } from "./components/footer-menu/footer-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterOutlet,
        LeftSidebarComponent,
        RightSidebarComponent,
        TopMenuComponent,
        PostComponent,
        FooterMenuComponent
    ]
})
export class AppComponent {
	title = 'twitter-clone'
}
