import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GroupsComponent } from "../../groups/groups.component";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink, GroupsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  

}
