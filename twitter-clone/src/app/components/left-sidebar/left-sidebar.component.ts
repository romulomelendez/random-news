import { Component } from '@angular/core';
import { MenuOptionComponent } from "../menu-option/menu-option.component";
import { PostButtonComponent } from "../post-button/post-button.component";
import { XLogoComponent } from "../x-logo/x-logo.component";

export type OptionsProps = {
	path: string,
	name: string,
}

@Component({
    selector: 'app-left-sidebar',
    standalone: true,
    templateUrl: './left-sidebar.component.html',
    imports: [MenuOptionComponent, PostButtonComponent, XLogoComponent]
})
export class LeftSidebarComponent {
	icons: OptionsProps[] = [
		{
			path: "home",
			name: "Home"
		},
		{
			path: "search",
			name: "Explore"
		},
		{
			path: "notifications",
			name: "Notifications"
		},
		{
			path: "mail",
			name: "Messages"
		},
		{
			path: "featured_play_list",
			name: "Lists"
		},
		{
			path: "bookmark",
			name: "Bookmarks"
		},
		{
			path: "group",
			name: "Communities"
		},
		{
			path: "close",
			name: "Premium"
		},
		{
			path: "person",
			name: "Profile"
		},
		{
			path: "more_horiz",
			name: "More"
		},
	];
}
