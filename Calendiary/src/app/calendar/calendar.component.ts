import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
