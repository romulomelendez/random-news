import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OptionsProps } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu-option.component.html'
})
export class MenuOptionComponent {
	@Input() icons!: OptionsProps[];
}
